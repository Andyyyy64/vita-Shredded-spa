<template>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <div class="malewrapper">
        <div class="userstatus" v-if="!calcFlg">
            <h1 class="statustitle">Choose your status</h1>
            <ageselect></ageselect>
            <heightselect></heightselect>
            <weightselect></weightselect>
            <activityselect></activityselect>
            <goalselect></goalselect>
        </div>
        <button class="macroBtn M" @click="Calcmacro" v-if="!calcFlg">Calculate Macros</button>
        <macrowrapper v-if="calcFlg"></macrowrapper>
        <button class="macroBtn M" v-if="calcFlg" @click="calcFlg = false">Change Status</button>
    </div>
</template>

<script lang="ts">
import weightselect from "../components/weightselect.vue";
import macrowrapper from "../components/macrowrapper.vue";
import goalselect from "../components/goalselect.vue";
import activityselect from "../components/activityselect.vue";
import heightselect from "../components/heightselect.vue";
import ageselect from "../components/ageselect.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        ageselect,
        heightselect,
        activityselect,
        goalselect,
        macrowrapper,
        weightselect
    },
    name: "MaleWrapper",
    data() {
        return {
            calcFlg: false
        }
    },
    methods: {
        Calcmacro() {
            this.calcFlg = true
            this.$store.state.totalkcal = Math.round(((10 * this.$store.state.weightinfo + 6.25 * this.$store.state.heightinfo - 5 * this.$store.state.ageinfo + 5) * this.$store.state.picked) * this.$store.state.pickedgoal)
            this.$store.state.protein = Math.round((this.$store.state.weightinfo * 2))
            this.$store.state.fat = Math.round((this.$store.state.totalkcal * 0.25) / 9)
            this.$store.state.carbohydrate = Math.round((this.$store.state.totalkcal - (this.$store.state.protein * 4) - (this.$store.state.fat * 9)) / 4)
        }
    }
})
</script>

<style>
.statustitle {
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    padding-top: 20px;
    font-size: 50px;
}

.malewrapper {
    padding-right: 360px;
}

.macroBtn {
    font-family: 'Economica', sans-serif;
    float: right;
    font-size: 50px;
    cursor: pointer;
    position: relative;
    bottom: 200px;
    left: 150px;
}

.M:hover {
    color: rgb(85, 85, 218);
    background-color: black;
    opacity: 0.7;
}

.M:active {
    opacity: 1;
}
@media screen and (max-width:480px){
    .macroBtn{
        margin-top: 250px;
        margin-right: 270px;
    }
}
</style>