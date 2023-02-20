<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          <div class="col-12">
            <!-- <button class="btn btn-danger mb-2" @click="clearCart"> Empty the basket </button> -->
            <button class="btn btn-danger mb-2" @click="clearCart"> {{$t('clearBasket')}} </button>
            <div class="card">
              <div class="table-responsive">
                <table class="table table-vcenter card-table">
                  <thead>
                    <tr>
                      <th>Produit</th>
                      <th>Qty</th>
                      <th>Prix</th>
                      <th class="w-1">Total produit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cartStore.getItems" :key="item.id">

                      <td>
                        <div class="d-flex py-1 align-items-center">
                          <button class="btn btn-danger btn-sm me-3" @click="removeProductCart(item)">X</button>
                          <span class="avatar me-2" :style="{ 'background-image': 'url(' + item.productImage + ')' }">
                          </span>

                          <div class="flex-fill">
                            <div class="font-weight-medium">{{ item.productName }}</div>
                            <div class="text-muted"> {{ item.productCategory }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="fs-2">
                        <button class="badge bg-primary-lt" @click="decrementProduct(item)">-</button>
                        {{ item.quantity }}
                        <button class="badge bg-primary-lt" @click="incrementProduct(item)">+</button>
                        <!-- <div class="text-muted">Accounting</div> -->
                      </td>
                      <td>
                        {{ item.price.toFixed(2) }}
                      </td>
                      <td>
                        {{ item.subTotal.toFixed(2) }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3">
                        <h3>Total</h3>
                      </td>
                      <td>
                        <h3>{{ cartStore.getToralAmount.toFixed(2) }}</h3>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const cartStore = useCart();
const clearCart = () => {

  cartStore.clearCart();

}
/**
 * 
 * @param {object} item 
 */
const incrementProduct = async (item) => {
  await cartStore.incrementQuatity(item)
}

const decrementProduct = async (item) => {
  await cartStore.decrementQuantity(item)
}



/**
 * 
 */
const removeProductCart = async (item) => {
  await cartStore.removeProductFromCart(item)
}
</script>