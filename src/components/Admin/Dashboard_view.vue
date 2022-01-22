<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-4">
          <div class="card">
            <div class="text-center p-3 mt-2">
              <i class="fas fa-boxes h5"></i>
              <div>items {{ totalProduct }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="card">
            <div class="text-center p-3 mt-2">
              <i class="fas fa-sitemap h5"></i>
              <div>categories {{ totalCat }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="card">
            <div class="text-center p-3 mt-2">
              <i class="fas fa-users h5"></i>
              <div>users {{ totalUser }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card mt-3">
            <div class="card-header">
              <div>Data Table</div>
            </div>
            <div class="card-body">
              <table class="table table-borderless align-middle">
                <thead>
                <tr>
                  <th scope="col">Product ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Controls</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="(list,index) in lists" :key="index" >
                    <td>{{ list.id }}</td>
                    <td>{{ list.name }}</td>
                    <td>{{ list.price }}ks</td>
                    <td>{{  (list.description).substring(0,50) }}</td>
                    <td>
                      <img :src=" list.image" width="30" alt="">
                    </td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-primary btn-sm" @click="detail(list)"><i class="fas fa-info"></i></button>
                        <button type="button" class="btn btn-outline-primary btn-sm" @click="del(list)"><i class="fas fa-trash-alt"></i></button>
                      </div>
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
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard_view",
  data() {
    return {
      lists: [],
      totalProduct: '',
      totalCat: '',
      totalUser: '',
    }
  },
  methods: {
    detail(list) {
      this.$router.push({name: 'SingleDetail', params: { 'id' : list.id }});
    },

    del(list) {
      console.log(list.id)
      let filter = this.lists.filter(function(value){
        return value.id !== list.id ;
      });

      if(confirm('Are you sure you want to delete!')){
        this.lists = filter
        axios.post('http://aps.mms-student.online/api/delproduct/'+list.id);
      }else{

      }

    },

  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/getallproduct').then((res)=>{
      this.lists = res.data
      this.totalProduct = res.data.length
    });

    axios.get('http://aps.mms-student.online/api/cats').then((res)=>{
      this.totalCat= res.data.length
    });

    axios.get('http://aps.mms-student.online/api/getallusers').then((res)=>{
      this.totalUser = res.data.length
    });
  }
}
</script>

<style scoped>

</style>