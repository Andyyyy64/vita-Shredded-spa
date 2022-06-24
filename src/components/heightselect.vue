<template>
    <div class="Hinfo">
        <h2 class="heighttitle">height</h2>
        <input type="text" v-model.number="this.$store.state.heightinfo" placeholder="CM" class="heightinput">
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeightSelect",
    data() {
        return {
        }
    }
})
</script>

<style>
.Hinfo {
    text-align: center;
}

.heighttitle {
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    font-size: 30px;
}

.heightinput {
    font-size: 20px;
    font-family: 'Economica', sans-serif;

}
</style>