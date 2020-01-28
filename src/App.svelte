<script>
  export let name;
</script>

<style>

</style>

<div _ngcontent-iwa-c1="" class="container main-content">
  <div class="row">
    <div class="col-md-4">
      <pm-product-list>
        <div class="card">
          <div class="card-header">Products</div>
          <div class="card-body">
            <div class="list-group">
              <button class="list-group-item list-group-item-action rounded-0">
                Leaf Rake (GDN-0011)
              </button>
              <button class="list-group-item list-group-item-action rounded-0">
                Garden Cart (GDN-0023)
              </button>
              <button class="list-group-item list-group-item-action rounded-0">
                Hammer (TBX-0048)
              </button>
              <button class="list-group-item list-group-item-action rounded-0">
                Saw (TBX-0022)
              </button>
              <button class="list-group-item list-group-item-action rounded-0">
                Video Game Controller (GMG-0042)
              </button>
            </div>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="form-check col-md-7">
                <label>
                  <input class="form-check-input" type="checkbox" />
                  Display Product Code
                </label>
              </div>
              <div class="col-md-4 text-right">
                <button class="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </pm-product-list>
    </div>
    <div class="col-md-8">
      <pm-product-edit />
    </div>
  </div>
</div>
