<template>
  <div class="container ">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-header">
            <div class="text-center">Register</div>
          </div>
          <div class="card-body">
            <form action="" @submit.prevent="signup" id="register_form">
              <div >
                <input type="text" v-model="name" class="form-control" placeholder="enter name" required>
              </div>
              <div class="mt-3">
                <input type="email" v-model="email" class="form-control" placeholder="enter email" required>
              </div>
              <div class="mt-3">
                <input type="password" v-model="password" class="form-control" placeholder="enter password" required>
              </div>
              <div class="mt-3">
                <input type="password" v-model="confirm_password" class="form-control" placeholder="enter confirm password" required>
              </div>

            </form>
          </div>
          <div class="card-footer">
            <div>
              <button class="btn btn-primary float-end w-100 btn-sm" form="register_form">SignUp</button>
              <div><router-link to="/login" class="nav-link text-center">go back to login</router-link></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  data: function(){
    return{
      name : '',
      email : '',
      password : '',
      confirm_password : '',
      token : '',
    }
  },
  methods:{
      signup(){
      let data = {
        'name' : this.name,
        'email' : this.email,
        'password' : this.password,
      };

      if(this.password === this.confirm_password){
        axios.post('http://aps.mms-student.online/api/register',data).then((res)=>{
          this.token = res.data.token;
          localStorage.setItem('token',this.token);
          this.name = ""
          this.email = ""
          this.password = ""
          this.confirm_password = ""
          if (localStorage.getItem('token') !== null) {
            window.location.href = '/dashboard/view'
          } else {}

        });
      }else{
        alert('password mush be same!')

        this.password = '';
        this.confirm_password = ''
      }
      

    }
  }
}
</script>

<style scoped>

</style>