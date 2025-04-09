<template>
    <button class="changeBtn btn btn_lg btn-dark mt-3 " @click="changeTheme.goChangeTheme">{{ changeTheme.textChangeText }}</button>
</template>

<script setup>
import { useChangeTheme } from '../stores/changeThemeBtn';
const changeTheme = useChangeTheme();


</script>