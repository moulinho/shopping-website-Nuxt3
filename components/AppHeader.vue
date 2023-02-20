<!-- Navbar -->

<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu"
        aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href="#">
          <img src="@/assets/static/logo.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </a>
      </h1>
      <div class="navbar-nav flex-row order-md-last">

        <div class="d-none d-md-flex">

          <div class="nav-item dropdown d-none d-md-flex me-3">
            <NuxtLink href="/cart" class="nav-link px-0" aria-label="Show notifications">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              <span class="badge bg-red">{{ cartStore.getTotalItems }}</span>
            </NuxtLink>
          </div>
      </div>
      <!-- 
        <div v-if="!token && !authStore.token" class="col-6 col-sm-4 col-md-2 col-xl py-3">
          <NuxtLink to="/login" class="btn btn-outline-primary w-100">
            Login
              </NuxtLink>
            </div> -->
        <div v-if="!token && !authStore.token" class="col-6 col-sm-4 col-md-2 col-xl py-3">
          <NuxtLink to="/login" class="btn btn-outline-primary w-100">
            {{ $t('login') }}
          </NuxtLink>
        </div>
        <div v-else class="col-6 col-sm-4 col-md-2 col-xl py-3">
          <a @click.prevent="logout" class="btn btn-outline-dark active w-100">
            Logout
          </a>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <div class="d-none d-xl-block ps-2">
              <div v-if="user && user.username">{{ user.username }}</div>
              <div class="mt-1 small text-muted">UI Designer</div>
            </div>
          </a>

        </div>
      </div>
    </div>
  </header>
  <div class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
      <div class="navbar navbar-light">
        <div class="container-xl">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click.prevent="resetProducts()">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span class="nav-link-title">
                  Home
                </span>
              </NuxtLink>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                role="button" aria-expanded="false">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                  </svg>
                </span>
                <span class="nav-link-title">
                  Catégorie
                </span>
              </a>
              <div class="dropdown-menu">
                <a v-for="categorie in categories" :key="categorie.name" class="dropdown-item" href=""
                  @click.prevent="fetchCategory(categorie.id)">
                  {{ categorie.name }}
                </a>

              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                role="button" aria-expanded="false">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                  </svg>
                </span>
                <span class="nav-link-title">
                  Language
                </span>
              </a>
              <div class="dropdown-menu">

                <NuxtLink :to="switchLocalPath('en')" class="dropdown-item">English</NuxtLink>
                <NuxtLink :to="switchLocalPath('fr')" class="dropdown-item"> Français</NuxtLink>
              

              </div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const authStore = useAuth();

const productStore = useProduct();

productStore.fetchCategoriesProduct();

const { categories } = storeToRefs(productStore);

/**
 * 
 * @param {Number} categoryId 
 */
const fetchCategory = async (categoryId) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`).then(data => data.json());
  productStore.products = response

};


const resetProducts = async () => {
  await router.push({ path: '/' }).then((result) => {

    window.location.reload()
  })
}

const token = useCookie('token');
const user = useCookie('user');


const logout = () => {
  token.value = null;
  user.value = null;
  authStore.logout();
  router.push({ path: '/login' })
}

const cartStore = useCart();

const switchLocalPath = useSwitchLocalePath();

</script>

<style lang="scss" scoped></style>