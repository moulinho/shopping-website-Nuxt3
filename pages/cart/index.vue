<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          <div class="col-12">
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
                  <tbody >
                    <tr v-for="item in cartStore.getItems" :key="item.id">
                     
                      <td>
                        <div class="d-flex py-1 align-items-center">
                          <span class="avatar me-2"
                            :style="{'background-image': 'url('+item.productImage+')'}">
                          </span>
                         
                          <div class="flex-fill">
                            <div class="font-weight-medium">{{item.productName}}</div>
                            <div class="text-muted"> {{ item.productCategory }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="fs-2">
                        <button class="badge bg-primary-lt">-</button>
                        {{item.quantity}}
                        <button class="badge bg-primary-lt">+</button>
                        <!-- <div class="text-muted">Accounting</div> -->
                      </td>
                      <td>
                        {{item.price}}
                      </td>
                      <td>
                        {{item.subTotal}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex py-1 align-items-center">
                        
                          <div class="flex-fill">
                            <div class="font-weight-medium">Autre produit</div>
                            <div class="text-muted"><a href="#" class="text-reset">Autre catégorie</a></div>
                          </div>
                        </div>
                      </td>
                      <td class="fs-2">
                        <button class="badge bg-primary-lt">-</button>
                        1
                        <button class="badge bg-primary-lt">+</button>
                      </td>
                      <td>
                        90€
                      </td>
                      <td>
                        90€
                      </td>
                    </tr>

                    <tr>
                      <td colspan="3">
                        <h3>Total</h3>
                      </td>
                      <td>
                        <h3>120€</h3>
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
</script>