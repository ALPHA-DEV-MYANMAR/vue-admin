<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card responsive-card">
            <div class="card-header">
              All Requests
            </div>
            <div class="card-body">
             <div v-for="(l,index) in orderLists" :key="index">
               Product ID is <span class="badge bg-primary">{{l.product_id}}</span> /
               Price is <span class="badge bg-primary">{{ l.price }}</span> /
               Quantity is <span class="badge bg-primary">{{ l.qty }}</span> /
               Location is <span class="badge bg-primary">{{ l.location }}</span> /
               Order date {{ l.created_at }}
               <button class="btn btn-outline-warning btn-sm">
                 <i class="fas fa-clipboard"></i>
                 confirm
               </button>
               <hr>
             </div>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Requests",
  data() {
    return {
      orderLists: [],
      productLists: []
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/getallorders').then((res)=>{
      this.orderLists = res.data ;
    });
  }
}
</script>

<style scoped>

</style>