<template>
    <button class="btn btn_lg btn-info mb-5" @click="buttonsGo.handleScroll('ancorUp')">наверх</button>
</template>

<script setup>

import { useButtonsGo } from '../stores/buttonsGo';
const buttonsGo = useButtonsGo();

</script>