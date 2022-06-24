<template>
    <div class="Winfo">
        <h2 class="weighttitle">weight</h2>
        <input type="text" v-model.number="this.$store.state.weightinfo" placeholder="KG" class="weightinput">
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "WeightSelect",
    data() {
        return {
        }
    }
})
</script>

<style>
.Winfo {
    text-align: center;
}

.weighttitle {
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    font-size: 30px;
}

.weightinput {
    font-size: 20px;
    font-family: 'Economica', sans-serif;

}
</style>