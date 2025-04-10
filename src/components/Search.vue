<template>
    <div>
        <form action="" class="mb-5" @submit.prevent="search.goSearch">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Введите название книги"
                    aria-label="Recipient's username" aria-describedby="button-addon2" v-model="search.searchText">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                    @click="search.goSearch">Найти</button>
            </div>
        </form>
        <Loader v-if="search.loader"/>
        <p v-show="search.errorText !== ''" class="errorText text-danger text-center">{{ search.errorText }}</p>
        <Books v-for="book of search.searchBooks" :key="book.cover_i" :book="book" />
    </div>
</template>

<script setup>

import { useSearch } from '@/stores/search';
import { ref } from 'vue';
import Books from '../components/Books.vue';
import Loader from '../components/Loader.vue';
const search = useSearch();

</script>