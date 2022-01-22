<template>
  <div>
<!--          sidebar-->
     <div class="col-6 col-md-6 col-lg-2 sidebar"  v-if="action">
            <div class="d-flex justify-content-between">
              <div>
                Shop
              </div>
              <div>
                <button class="btn btn-close d-lg-none" @click="action = false"></button>
              </div>
            </div>

            <div>
              <ul class="menu d-inline">

                <li class="menu-item p-2 ">
                  <router-link to="/dashboard/view" class="menu-item-list text-decoration-none text-black">Dashboard</router-link>
                </li>

                <li class="menu-item p-2 ">
                  <router-link to="/dashboard/create/item" class="menu-item-list text-decoration-none text-black">Create new item</router-link>
                </li>

                <li class="menu-item p-2 ">
                  <router-link to="/dashboard/create/category" class="menu-item-list text-decoration-none text-black">Create new category</router-link>
                </li>

                <li class="menu-item p-2 ">
                  <router-link to="/dashboard/requests" class="menu-item-list text-decoration-none text-black">Requests</router-link>
                </li>

                <li class="menu-item p-2 ">
                  <router-link to="/dashboard/editusers" class="menu-item-list text-decoration-none text-black">Edit users</router-link>
                </li>

                <li class="menu-item p-2">
                  <button class="btn btn-danger" @click="logout" >logout</button>
                </li>

              </ul>
            </div>
     </div>
<!--          sidebar-->
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    logout() {

    }
  },
}
</script>

<style scoped>

</style>