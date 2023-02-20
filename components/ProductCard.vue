<template>
  <div class="col-sm-6 col-lg-4">
    <div class="card card-sm">
      <a :href="`/product/${product.id}`" class="d-block">
        
        <!-- <img :src="product.images[1]" class="card-img-top"> -->
        <!-- <nuxt-img fit="contains" :src="product.images[1]" :alt="product.title" class="card-img-top" loading="lazy" preload/> -->
        <nuxt-img fit="cover" :src="`${product.images[0]}`" :alt="product.title" class="card-img-top" loading="lazy" preload />
      </a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <div>{{ product.title }}</div>
            <div class="text-muted">{{ product.category.name }}</div>
          </div>

        </div>
      </div>
    </div>
</div>
</template>
<script setup>
defineProps({
  product: {
    type: Object,
    require: true
  }
})
</script>