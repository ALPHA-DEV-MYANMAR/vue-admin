<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              All Users
            </div>
            <div class="card-body">
              <table class="table text-start table-borderless align-middle ">
                <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Created Time</th>
                </tr>
                </thead>
                <tbody class="align-middle">
                <tr  v-for="(list,index) in lists" :key="index">
                  <td class="w-25">
                    {{ list.name }}
                  </td>
                  <td class="w-25">
                    {{ list.email }}
                  </td>
                  <td class="w-25">
                    {{ list.created_at }}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              All Users Total {{ total }}
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
  name: "EditUsers",
  data() {
    return {
      lists: [],
      total: "",
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/getallusers',{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    }).then((res)=>{
      this.lists = res.data;
      this.total = this.lists.length;
    });
  }
}
</script>

<style scoped>

</style>