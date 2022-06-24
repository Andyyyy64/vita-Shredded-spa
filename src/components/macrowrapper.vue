<template>
    <div class="container">
        <h1 class="macroinfo">Protein {{ this.$store.state.protein }}g</h1>
        <h1 class="macroinfo">Carbohydrate {{ this.$store.state.carbohydrate }}g</h1>
        <h1 class="macroinfo">Fat {{ this.$store.state.fat }}g</h1>
        <h1 class="kcalinfo">Total {{ this.$store.state.totalkcal }}kcal</h1>
    </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MacroWrapper",
    data() {
        return {
        }
    }
})
</script>

<style>
.macroinfo {
    font-family: 'Economica', sans-serif;
    padding-top: 50px;
    display: flex;
    padding-left: 300px;
    font-size: 50px;
}

.kcalinfo {
    font-family: 'Economica', sans-serif;
    font-size: 70px;
    margin-top: 20px;
}
@media screen and (max-width:480px){
    .macroinfo{
        position: relative;
        right: 150px;
    }
}
</style>