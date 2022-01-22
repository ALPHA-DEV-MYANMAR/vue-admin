<template>
  <div class="container ">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header">
            <div class="text-center">Login</div>
          </div>
          <div class="card-body">
            <form action="" @submit.prevent="sign_in" id="login_form">
              <div>
                <input type="email" v-model="email" class="form-control" placeholder="enter email" required>
              </div>
              <div class="mt-3">
                <input type="password" v-model="password" class="form-control" placeholder="enter password" required>
              </div>
            </form>
          </div >
          <div class="card-footer">
              <div>
                <button class="btn btn-primary btn-sm float-end w-100" form="login_form">SignIn</button>
                <router-link to="/register" class="nav-link text-center">go to register</router-link>
              </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data:function(){
    return{
      email : '',
      password : '',
    }
  },

  methods:{
    sign_in(el){
      let data = { 'email' : this.email , 'password' : this.password }
      axios.post('http://aps.mms-student.online/api/login',data).then((res)=>{
        localStorage.setItem('token',res.data.token);
        this.email  = ""
        this.password = ""
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/dashboard/view'
        } else {

        }

      });
    }
  }

}
</script>

<style scoped>

</style>