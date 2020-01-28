<script>
  import { store, actions } from "./store";
  const emptyProd = {
    id: 0,
    productName: "",
    productCode: "",
    description: "",
    starRating: 0
  };

  var selectedProduct = { ...emptyProd };
  var pageTitle = "Product list";
  var displayCode = false;
  var errorMessage = "";

  function productSelected(product) {
    store.dispatch(actions.setCurrent, product.id);
  }

  function newProduct() {
    store.dispatch(actions.newProduct);
  }
</script>

<div class="card">
  <div class="card-header">{pageTitle}</div>

  <div class="card-body">
    <!-- *ngIf="products$ | async as products" -->
    <div class="list-group">
      {#each $store.products as product}
        <button
          class="list-group-item list-group-item-action rounded-0"
          class:active={product && selectedProduct && product.id === $store.currentProduct.id}
          on:click={productSelected(product)}>
          {product.productName}
          {#if displayCode}({product.productCode}){/if}
        </button>
      {/each}
    </div>
  </div>

  <div class="card-footer">
    <div class="row">
      <div class="form-check col-md-7">
        <label>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={displayCode} />
          Display Product Code
        </label>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-primary" on:click={newProduct}>Add</button>
      </div>
    </div>
  </div>
</div>
{#if errorMessage}
  <div class="alert alert-danger">Error: {errorMessage}</div>
{/if}
