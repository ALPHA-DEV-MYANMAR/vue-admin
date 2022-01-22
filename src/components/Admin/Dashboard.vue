<template>
  <div class="container-fluid">
    <div class="row justify-content-lg-center ">
<!--      sidebar-->
         <div class="col-6 col-md-6 col-lg-2 sidebar animate__animated animate__fadeInLeft" v-show="state" v-if="action">
        <div class="d-flex justify-content-between">
          <div class="h4 mb-0 m-2">
            Shop
          </div>
          <div>
            <button class="btn btn-close d-lg-none"  @click="action = false"></button>
          </div>
        </div>

        <div>
          <ul class="menu d-inline">

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/view"  class="menu-item-list text-decoration-none text-black">
                <i class="fas fa-home"></i>
                Dashboard
              </router-link>
            </li>

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/create/item" class="menu-item-list text-decoration-none text-black">
                <i class="far fa-plus-square"></i>
                Create Item
              </router-link>
            </li>

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/create/category" class="menu-item-list text-decoration-none text-black">
                <i class="fas fa-list"></i>
                Categories
              </router-link>
            </li>

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/requests" class="menu-item-list text-decoration-none text-black">
                <i class="far fa-bell"></i>
                Orders
              </router-link>
            </li>

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/comment" class="menu-item-list text-decoration-none text-black">
                <i class="far fa-comment"></i>
                Comments
                <span class="badge rounded-pill bg-warning text-dark">
                  {{ commentTotal }}
                </span>
              </router-link>
            </li>

            <li class="menu-item p-2 ">
              <router-link to="/dashboard/editusers" class="menu-item-list text-decoration-none text-black">
                <i class="fas fa-users"></i>
                Users
              </router-link>
            </li>

            <li class="menu-item p-2">
              <button class="btn btn-danger btn-sm" @click="logout" >
                <i class="fas fa-sign-out-alt"></i>
                logout
              </button>
            </li>

          </ul>
        </div>

      </div>
<!--      sidebar-->

      <div class="col-12 col-md-12 col-lg-10 content">
<!--      header-->
        <div>
          <div class="card" v-show="state">

            <div class="d-flex justify-content-between align-items-center p-2 bg-primary">
              <button class="btn btn-secondary d-lg-none" v-show="state" @click="action = true">
                <i class="fas fa-bars"></i>
              </button>
              <div class="h5 mb-0 text-light">Admin Dashboard</div>
            </div>

          </div>
        </div>
<!--      header-->

<!--     content-->
        <div class="mt-2">
          <router-view></router-view>
        </div>
<!--     content-->
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from "./Nav";
export default {
  name: "Dashboard",
  components: {Nav},
  data() {
    return {
      action: true,
      name: "",
      email: "",
      state: false,
      userTotal: "",
      commentTotal: "",
      productTotal: "",
      categoryTotal: "",
      requestTotal: "",
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
  },
  mounted(){
    axios.get('http://aps.mms-student.online/api/user',{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    }).then((res)=>{
      console.log(res)
      this.name = res.data.name
      this.email = res.data.email
      this.state = true
    });

    axios.get('http://aps.mms-student.online/api/getallcomment').then((res)=>{
      this.commentTotal = res.data.length
    });

  }
}
</script>

<style scoped>

</style>