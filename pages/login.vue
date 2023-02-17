<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row justify-content-center">
       <div class="col-lg-10 col-xl-9">
            <div class="card card-lg">
              <div class="card-body markdown">
                
                <div class="row">
                  <div class="col-md-6 col-xl12">
                    <form action="" @submit.prevent="onSubmit">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Username
                        </label>
                        <input type="text" name=""  class="form-control" placeholder="Username" v-model="form.username">
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Password
                        </label>
                        <input type="password" name=""  class="form-control" placeholder="Password" v-model="form.password">
                      </div>
                      <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const authStore = useAuth()
const form = reactive({
    username:'',
    password:''
});
const onSubmit = () => {
  console.log(form);
  authStore.login(form.username,form.password)
}
definePageMeta({
  middleware:'check-guest'
})
</script>

<style scoped>

</style>