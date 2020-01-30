import { writable } from "svelte/store";
import { produce } from "immer";
import { emptyProduct, products } from "./dummy/data";

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
  update: "[Product] Add new product",
  delete: "[Product] Delete a product"
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.setCurrent:
      draft.currentProduct = draft.products.find(
        prod => prod.id === action.payload
      );
      break;
    case actionTypes.newProduct:
      draft.currentProduct = { ...emptyProduct, id: draft.products.length + 1 };
      break;
    case actionTypes.noSelected:
      draft.currentProduct = {};
      break;
    case actionTypes.add:
      const found = draft.products.findIndex(p => p.id === action.payload.id);
      if (found !== -1) {
        draft.products.splice(found, 1, action.payload);
        draft.currentProduct = action.payload;
      } else {
        draft.currentProduct = action.payload;
        draft.products.push(action.payload);
      }
      break;
    case actionTypes.delete:
      console.log("draft", draft);

      var i = draft.products.findIndex(p => p.id === draft.currentProduct.id);
      if (i !== -1) {
        draft.products.splice(i, 1);
        draft.currentProduct = null;
      }
      break;
  }
});

export const store = redux({ products, currentProduct }, reducer);
