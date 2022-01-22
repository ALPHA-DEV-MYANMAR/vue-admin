<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="card">

          <div class="card-header text-center">
            Create new Item
          </div>

          <div class="card-body">
            <form action="" @submit.prevent="sub" enctype="multipart/form-data" class="w-50 mx-auto" id="create_item_form">

              <div class="mt-2">
                <input type="file" class="form-control" accept="image/jpeg,image/png" @change="privewFile" required >
              </div>
              
              <div class="mt-2">
                <img :src="imageUrl" style="width:150px;" class="img-fluid img-thumbnail" alt="">
              </div>

              <div class="mt-2">
                <input type="text" class="form-control" placeholder="Enter new item's name" v-model="name" required>
              </div>

              <div class="mt-2">
                <select class="form-select" aria-label="Default select example" @change="selectCategory($event)" required >
                  <option selected>Selected Category</option>
                  <option :value="cat.id" v-for="(cat,index) in catLists" :key='index' >{{ cat.name }}</option>
                </select>
              </div>

              <div class="mt-2">
                <input type="number" class="form-control" placeholder="Enter new item's price" v-model="price" required>
              </div>

              <div class="mt-2">
                <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Enter new item's description" v-model="description" required></textarea>
              </div>

            </form>
          </div>

          <div class="card-footer">

            <div class="text-center">
              <button class="btn btn-primary btn-sm w-50 mx-auto" form="create_item_form">submit</button>
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
  name: "Create",
  data() {
    return {
      catLists : "",
      cat_id: "",
      name: "",
      price: "",
      imageUrl: "",
      filename: "",
      file: "",
      imagePathUrl: "",
      description: "",
    }
  },

  mounted() {
    axios.get('http://aps.mms-student.online/api/cats').then((res) => {
      this.catLists = res.data
    })
  },

  methods: {
    selectCategory(event) {
      this.cat_id = event.target.value
    },

    //submit 
    sub(el) {
      const formData = new FormData
      formData.set('image',this.file)

      axios.post('http://aps.mms-student.online/api/imageUpload',formData).then((res)=>{
        this.imagePathUrl = res.data.path;

          axios.post('http://aps.mms-student.online/api/newProduct',{
            'cat_id' : this.cat_id,
            'name'   : this.name,
            'price'  : this.price,
            'image'  : this.imagePathUrl,
            'description' : this.description
          }).then((res)=>{
            el.target.reset();
            this.imageUrl = ""
            this.name = ""
            this.price = ""
            this.cat_id = ""
            this.description = ""
            window.alert('Successfully created this Items!');
          })

      })

    },

    //image upload 
    privewFile(event) {
      const files = event.target.files
      this.filename = files[0].name
      this.file = event.target.files[0]
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },

  }
}
</script>

<style scoped>

</style>

