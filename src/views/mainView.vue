<template>
    <v-container fluid>
        <router-view class="content"></router-view>
        <Navegation /> 
    </v-container>
</template>

<script setup>
import Navegation from '../components/Navegation.vue'
</script>

<style scoped>
.content {
    margin-top: 20px; /* Espaciado opcional */
}
</style>

