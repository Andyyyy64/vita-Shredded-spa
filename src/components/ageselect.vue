<template>
  <div class="Ainfo">
    <h2 class="agetitle">Age</h2>
    <input type="text" v-model.number="this.$store.state.ageinfo" placeholder="Age" class="ageinput">
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgeSelect",
  data() {
    return {
    }
  }
})
</script>

<style>
.Ainfo {
  text-align: center;
}

.agetitle {
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'Economica', sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.ageinput {
  font-size: 20px;
  font-family: 'Economica', sans-serif;

}
</style>