<template>
    <div class="page">

        <div class="page-wrapper">
            <!-- Page body -->
            <div class="page-body">
                <div class="container-xl">

                    <div class="">
                        <form @submit.prevent="tilteProduct">
                            <input type="text" placeholder="Search" v-model="searchTitle" class="form-control">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </form>
                    </div>

                    <div class="row row-cards">
                        <ProductCard v-for="product in products" :key="product.id" :product="product" />

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>

const productStore = useProduct()



const route = useRoute();

const router = useRouter()
// const searchTitle = ref()
const searchTitle = ref()
// watchEffect(searchTitle,()=>{
//     console.log('searchTitle',);

// const category = ref()
// })
const category = ref(route.query.category || null)
productStore.fetchCategoriesProduct(category.value)

productStore.fetchAllProducts();

const { products } = storeToRefs(productStore)

const tilteProduct = () => {

    productStore.fetchSearchProducts(searchTitle.value);
    router.push({ query: { title:searchTitle.value } })

}


</script>
