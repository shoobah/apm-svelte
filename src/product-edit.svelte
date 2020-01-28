<script>
  var pageTitle = "Product Edit";
  var errorMessage = "";
  var product = {};
  var displayMessage = {};

  var product = {};

  function blur() {}
  function saveProduct() {}
  function cancelEdit() {}
  function deleteProduct() {}
</script>

{#if product}
  <div class="card">
    <div class="card-header">{pageTitle}</div>
    <div class="card-body">
      <form novalidate on:submit={saveProduct}>
        <fieldset>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="productNameId">
              Product Name
            </label>

            <div class="col-md-9">
              <input
                class:is-invalid={displayMessage.productName}
                class="form-control"
                id="productNameId"
                type="text"
                placeholder="Name (required)"
                formControlName="productName"
                on:blur={blur} />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="productCodeId">
              Product Code
            </label>

            <div class="col-md-9">
              <input
                class="form-control"
                id="productCodeId"
                type="text"
                placeholder="Code (required)"
                formControlName="productCode"
                on:blur={blur} />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="starRatingId">
              Star Rating (1-5)
            </label>

            <div class="col-md-9">
              <input
                class="form-control"
                id="starRatingId"
                type="text"
                placeholder="Rating"
                formControlName="starRating" />
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
                formControlName="description" />
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-10 col-md-offset-2">
              <span>
                <button
                  class="btn btn-primary"
                  type="submit"
                  style="width:80px;margin-right:10px"
                  Save>
                  Add
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
                  click={deleteProduct}>
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
