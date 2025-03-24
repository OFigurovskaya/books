<script setup>
import { useBooksList } from '@/stores/BooksBase';
import ButtonsAddDel from './ButtonsAddDel.vue';
const booksList = useBooksList();
const props = defineProps({
    book: {
        type: Object,
        required: true,
        default: () => { }
    }
});
    

</script>

<template>
    <div class="card mt-3 card border-success-subtle border-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body ">
            <h5 class="card-title text-center">{{ book.title }}</h5>
            <h6 class="card-text text-center">{{ booksList.authorName(book.author_name) }}</h6>
            <p class="card-text">количество страниц: {{ book.edition_count }} стр.</p>
            <p class="card-text">первая публикация: {{ book.first_publish_year }} </p>
            <h6 class="card-text">Языки:</h6>
            <ul class="list-group list-group-flush" v-for="(lang, index) in book.language" :key="index">
                <li class="list-group-item">{{ lang }}</li>
            </ul>
            <ButtonsAddDel :id="book.cover_i"/>
        </div>
        
    </div>
</template>