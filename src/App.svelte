<script>
  import ProductList from "./product-list.svelte";
  import EditProduct from "./product-edit.svelte";

  export let name;
</script>

<div class="container main-content">
  <div class="row">
    <div class="col-md-4">
      <ProductList />
    </div>
    <div class="col-md-8">
      <EditProduct />
    </div>
  </div>
</div>
