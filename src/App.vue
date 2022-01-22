<template>
  <div>
    <dashboard></dashboard>
  </div>
</template>

<style>

@import "assets/css/style.css";
@import "assets/css/custom.css";

</style>
<script>
import Dashboard from './components/Admin/Dashboard.vue';
export default {
  name: 'app',
  components: {  Dashboard}
}
</script>