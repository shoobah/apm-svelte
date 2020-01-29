import { writable } from "svelte/store";
import { produce } from "immer";

const emptyProduct = {
  id: 0,
  productName: "",
  productCode: "",
  description: "",
  starRating: null
};

const products = [
  {
    id: 1,
    productName: "Leaf Rake",
    productCode: "GDN-0011",
    description: "Leaf rake with 48-inch wooden handle",
    starRating: 3.2
  },
  {
    id: 2,
    productName: "Garden Cart",
    productCode: "GDN-0023",
    description: "15 gallon capacity rolling garden cart",
    starRating: 4.2
  },
  {
    id: 3,
    productName: "Hammer",
    productCode: "TBX-0048",
    description: "Curved claw steel hammer",
    starRating: 4.8
  },
  {
    id: 4,
    productName: "Saw",
    productCode: "TBX-0022",
    description: "15-inch steel blade hand saw",
    starRating: 3.7
  },
  {
    id: 5,
    productName: "Video Game Controller",
    productCode: "GMG-0042",
    description: "Standard two-button video game controller",
    starRating: 4.6
  }
];

const currentProduct = {};

function redux(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  const { update, subscribe } = writable(init);

  function dispatch(action) {
    update(state => {
      devTools.send(action, state);
      return reducer(state, action);
    });
  }

  return {
    subscribe,
    dispatch
  };
}
export const actionTypes = {
  setCurrent: "[Product] Set current product",
  newProduct: "[Product] Create new",
  noSelected: "[Product] Clear selected product",
  add: "[Product] Add new product",
  update: "[Product] Add new product"
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.setCurrent:
      draft.currentProduct = products.find(prod => prod.id === action.payload);
      break;
    case actionTypes.newProduct:
      draft.currentProduct = { ...emptyProduct, id: products.length + 1 };
      break;
    case actionTypes.noSelected:
      draft.currentProduct = {};
      break;
    case actionTypes.add:
      if (draft.products.findIndex(p => p.id === action.payload.id) !== -1) {
        draft.products = [...products, payload];
      } else {
        draft.currentProduct = action.payload;
        draft.products.push(action.payload);
      }
      break;
  }
});

export const store = redux({ products, currentProduct }, reducer);
