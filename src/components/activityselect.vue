<template>
    <div class="acitivecontainer">
        <h2 class="Activetitle">Activity Levels</h2>
        <div class="radiocontaier">
            <input type="radio" class="ActiveL" name="Activity" id="option1" value="1.2"
                v-model.number="this.$store.state.picked"><span>Sedentary</span>
            <input type="radio" class="ActiveL" name="Activity" id="option1" value="1.375"
                v-model.number="this.$store.state.picked"><span>Light Activity</span>
            <input type="radio" class="ActiveL" name="Activity" id="option1" value="1.55"
                v-model.number="this.$store.state.picked"><span>Moderate Activity</span>
            <input type="radio" class="ActiveL" name="Activity" id="option1" value="1.725"
                v-model.number="this.$store.state.picked"><span>Active</span>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ActivitySelect",
    data() {
        return {
        }
    }
})
</script>

<style>
.Activetitle {
    font-family: 'Economica', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
}

.ActiveL {
    transform: scale(1.5);
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

span {
    margin-left: 10px;
    font-family: 'Economica', sans-serif;
    font-size: 20px;
}

.radiocontaier {
    width: 500px;
    border: solid 2px rgb(0, 0, 0);
    border-radius: 5px;
}
</style>
