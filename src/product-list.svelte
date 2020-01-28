<script>
  function productSelected(product) {
    console.log("product", product);
  }

  const emtyProd = {
    id: 0,
    productName: "",
    productCode: "",
    description: "",
    starRating: 0
  };

  var products = [
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

  var displayCode = false;
</script>

<div class="card">
  <div class="card-header">{pageTitle}</div>

  <div class="card-body">
    <!-- *ngIf="products$ | async as products" -->
    <div class="list-group">
      {#each products as product}
        <button
          class="list-group-item list-group-item-action rounded-0"
          class:active={product && selectedProduct && product.id === selectedProduct.id}
          *ngFor="let product of products"
          on:click={productSelected(product)}>
          {product.productName}
          {#if displayCode}{product.productCode}{/if}
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
            on:change={checkChanged($event.target.checked)}
            bind:checked={displayCode} />
          Display Product Code
        </label>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-primary" (click)="newProduct()">Add</button>
      </div>
    </div>
  </div>
</div>
<div *ngIf="errorMessage$ | async as errorMessage" class="alert alert-danger">
  Error: {{ errorMessage }}
</div>
