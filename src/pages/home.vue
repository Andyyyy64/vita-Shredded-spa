<template>
    <div class="SelectInfo">
        <router-link to="/male" class="pickgenderM"></router-link>
        <router-link to="/female" class="pickgenderFM"></router-link>
        <router-view></router-view>
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