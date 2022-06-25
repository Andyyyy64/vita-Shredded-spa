<template >
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <div class="femalewrapper">
        <div class="userstatus" v-if="!calcFlg">
            <h1 class="femalestatustitle">Choose your status</h1>
            <ageselect class="femaleAge"></ageselect>
            <heightselect class="femaleAge"></heightselect>
            <weightselect class="femaleAge"></weightselect>
            <activityselect class="femaleAge"></activityselect>
            <goalselect class="femaleAge"></goalselect>
        </div>
        <button class="macroBtn F" @click="Calcmacro" v-if="!calcFlg">Calculate Macros</button>
        <macrowrapper v-if="calcFlg" class="femacroAge"></macrowrapper>
        <button class="macroBtn F" v-if="calcFlg" @click="calcFlg = false">Change Status</button>
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
    name: "FemaleWrapper",
    data(): { calcFlg: boolean; } {
        return {
            calcFlg: false
        }
    },
    methods: {
        Calcmacro() {
            this.calcFlg = true
            this.$store.state.totalkcal = Math.round(((10 * this.$store.state.weightinfo + 6.25 * this.$store.state.heightinfo - 5 * this.$store.state.ageinfo - 161) * this.$store.state.picked) * this.$store.state.pickedgoal)
            this.$store.state.protein = Math.round((this.$store.state.weightinfo * 2))
            this.$store.state.fat = Math.round((this.$store.state.totalkcal * 0.25) / 9)
            this.$store.state.carbohydrate = Math.round((this.$store.state.totalkcal - (this.$store.state.protein * 4) - (this.$store.state.fat * 9)) / 4)
        }
    }
})
</script>
<style>
.femacroAge {
    color: rgb(201, 147, 156);
}

.femaleAge {
    color: rgb(201, 147, 156);
}

.femalestatustitle {
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    padding-top: 20px;
    font-size: 50px;
    color: rgb(201, 147, 156);
}

.femalewrapper {
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

.F:hover {
    color: rgb(201, 147, 156);
    background-color: black;
    opacity: 0.7;
}

.F:active {
    opacity: 1;
}

@media screen and (max-width:480px) {
    .macroBtn {
        margin-top: 250px;
        margin-right: 270px;
    }
}
</style>