<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">

              <div class="d-flex justify-content-between">

                <div class="text-center">Item's Detail</div>
                <button class="btn btn-close" @click="close"></button>

              </div>

            </div>
            <div class="card-body">
              <div class="row">

                <div class="col-lg-6">
                  <div class="text-center">
                    <img :src="product.image" width="200" alt="">
                  </div>
                </div>

                <div class="col-lg-6 d-flex align-items-center">

                  <div class="">
                    <div>
                      <span class="text-black-50">Item's Name is </span>{{ product.name }}
                    </div>
                    <div>
                      <span class="text-black-50">Item's Price is </span>{{ product.price }} ks
                    </div>
                    <div>
                      <span class="text-black-50">Item's category is </span>{{ catName }}
                    </div>
                    <div>
                      <p>
                        {{ product.description }}
                      </p>
                    </div>
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

<script>
import axios from "axios";

export default {
  name: "singledetail",
  data() {
    return {
      product: '',
      catName: '',
    }
  },
  methods: {
    close() {
      this.$router.push({ name:'DashboardView' });
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/product/'+this.$route.params.id).then((res)=>{
      this.product = res.data
      axios.get('http://aps.mms-student.online/api/cat/'+this.product.cat_id).then((res)=> {
        this.catName = res.data.name
      });
    });
  }
}
</script>

<style scoped>

</style>