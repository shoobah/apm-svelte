<script>
  import { store, actionTypes } from "./store";
  import { onDestroy } from "svelte";

  var pageTitle = "Product Edit";
  var errorMessage = "";
  var product = {};
  var displayMessage = {};

  const unsubscribe = store.subscribe(p => {
    product = { ...p.currentProduct };
  });

  function saveProduct() {
    store.dispatch({ type: actionTypes.add, payload: product });
  }
  function cancelEdit() {
    store.dispatch({ type: actionTypes.noSelected });
  }
  function deleteProduct() {
    store.dispatch({ type: actionTypes.delete });
  }

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#if product && product.id >= 0}
  <div class="card">
    <div class="card-header">{pageTitle} - {product.id}</div>
    <div class="card-body">
      <form novalidate on:submit={saveProduct}>
        <fieldset>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="productNameId">
              Product Name
            </label>

            <div class="col-md-9">
              <input
                class="form-control"
                type="text"
                placeholder="Name (required)"
                bind:value={product.productName} />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="productCodeId">
              Product Code
            </label>

            <div class="col-md-9">
              <input
                class="form-control"
                type="text"
                placeholder="Code (required)"
                bind:value={product.productCode} />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="starRatingId">
              Star Rating (1-5)
            </label>

            <div class="col-md-9">
              <input
                class="form-control"
                type="text"
                placeholder="Rating"
                bind:value={product.starRating} />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="descriptionId">
              Description
            </label>

            <div class="col-md-9">
              <textarea
                class="form-control"
                id="descriptionId"
                placeholder="Description"
                rows="3"
                bind:value={product.description} />
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-10 col-md-offset-2">
              <span>
                <button
                  class="btn btn-primary"
                  type="button"
                  style="width:80px;margin-right:10px"
                  on:click={saveProduct}>
                  Save
                </button>
              </span>
              <span>
                <button
                  class="btn btn-light"
                  type="button"
                  style="width:80px;margin-right:10px"
                  on:click={cancelEdit}>
                  Cancel
                </button>
              </span>
              <span>
                <button
                  class="btn btn-light"
                  type="button"
                  style="width:80px"
                  on:click={deleteProduct}>
                  Delete
                </button>
              </span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
{/if}
{#if errorMessage}
  <div class="alert alert-danger">Error: {errorMessage}</div>
{/if}
