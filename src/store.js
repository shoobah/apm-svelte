import { writable } from "svelte/store";

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

const currentProduct = 0;

function redux(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  const { update, subscribe } = writable(init);

  function dispatch(action, payload) {
    update(state => {
      devTools.send(action, state);
      return reducer(state, action, payload);
    });
  }

  return {
    subscribe,
    dispatch
  };
}

const reducer = (state, action, payload) => {
  switch (action) {
    case "setCurrent":
      return {
        ...state,
        currentProduct: products.find(prod => prod.id === payload)
      };
    default:
      return state;
  }
};

export const store = redux({ products, currentProduct }, reducer);
