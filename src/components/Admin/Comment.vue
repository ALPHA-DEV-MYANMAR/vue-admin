<template>
  <div>
    <div class="card">
      <div class="card-header">

        <div class="d-flex justify-content-between">
          <div class="text-center">Item's Detail</div>
          <button class="btn btn-close" @click="$router.push({ name:'DashboardView' });"></button>
        </div>

      </div>
      <div class="card-body">
        <table class="table table-hover align-middle">
          <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Comment</th>
            <th scope="col">Control</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(l,index) in CommentLists" :key="index">
              <td>{{ l.product_id }}</td>
              <td>{{ l.comment }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="del(l)">
                  <i class="fas fa-trash-alt "></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Comment",
  data() {
    return {
      CommentLists: []
    }
  },
  methods: {
    del(l) {
      console.log(l.id)
      let filter = this.CommentLists.filter(function(value){
        return value.id !== l.id ;
      });

      if(confirm('Are you sure you want to delete!')){
        this.CommentLists = filter
        axios.post('http://aps.mms-student.online/api/delcomment/'+l.id).then((res)=>console.log(res))
      }else{

      }

    },
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/getallcomment').then((res)=>{
      this.CommentLists = res.data ;
    })
  }
}
</script>

<style scoped>

</style>