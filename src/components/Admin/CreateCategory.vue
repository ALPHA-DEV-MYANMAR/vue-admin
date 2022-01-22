<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 ">
        <div class="card">
          <div class="card-header">

            <div class="justify-content-between align-items-center d-lg-flex">
              <div class="text-center">Category Lists</div>
              <div class="input-group input-weight">
                <input type="text" class="form-control" placeholder="enter new category" v-model="newcat" @keyup.enter="addnewcat" >
                <button class="btn btn-primary" @click="addnewcat">add</button>
              </div>
            </div>

          </div>

          <div class="card-body">
            <table class="table text-start  align-middle ">
              <thead>
                <tr>
                  <th scope="col">Category's Name</th>
                  <th scope="col">Controls</th>
                </tr>
              </thead>
              <tbody class="align-middle">
                <tr v-for="(category,index) in categories" :key="index">
                  <td class="w-25">
                    <div>
                      <input v-if="category.editing === true" type="text" class="form-control w-50" v-model="category.name" @keyup.enter="action(category)">
                      <span v-else class="badge bg-primary">#{{ category.name }}</span>
                    </div>

                  </td>
                  <td class="w-25">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button v-if="category.editing === true" type="button" class="btn btn-primary btn-sm" @click="can(category)">
                        <i class="fas fa-ban"></i>
                      </button>
                      <button v-else type="button" class="btn btn-primary btn-sm" @click="ed(category)">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button type="button" class="btn btn-primary btn-sm" @click="del(category)">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-footer">
            <div>
              Total Category {{ total }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "CreateCategory",

  data() {
    return {
      categories: [],
      newcat: "",
      total: "",
    }
  },

  methods: {

    ed(category){
      category.editing = true
    },

    can(category){
      category.editing = false
    },

    action(category){
      axios.post('http://aps.mms-student.online/api/cat/'+category.id,{ 'name' : category.name });
      category.editing = false 
    },

    del(category) {
      console.log(category.id)
      let filter = this.categories.filter(function(value){
          return value.id !== category.id ;
      });

      if(confirm('Are you sure you want to delete!')){
        this.categories = filter
        axios.post('http://aps.mms-student.online/api/delcat/'+category.id).then((res)=>console.log(res))
      }else{

      }

    },

    addnewcat(){

      if(this.newcat === ''){
        alert('Input must not be null,please enter something!')
      }else{
        this.categories.push({
          name : this.newcat
        });
        axios.post('http://aps.mms-student.online/api/newcat',{ name: this.newcat }).then((res)=>console.log(res));
        this.newcat = "";
      }

    }
  },

  mounted() {
    axios.get('http://aps.mms-student.online/api/cats').then((res)=>{
      this.categories = res.data;
      this.total = this.categories.length;
    });
  }
}
</script>

<style scoped>

</style>