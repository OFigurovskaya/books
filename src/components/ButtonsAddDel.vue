<template>
    <div class="buttonsAddDel d-flex justify-content-center mb-3 gap-4">
        <button class="btn btn-success" @click="booksList.favoriteBooksAdd(id)">Добавить в избранное</button>
        <button class="btn btn-danger" @click="booksList.favoriteBooksDel(id)">Удалить из избранного</button>
    </div>
</template>

<script setup>
import { useBooksList } from '..//stores/BooksBase';
import { defineProps } from 'vue';

const booksList = useBooksList();
const props = defineProps({
    id: Number
});
</script>