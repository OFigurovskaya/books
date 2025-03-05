<script setup>
import { useBooksList } from './stores/BooksBase';
import Books from './components/Books.vue';
import Loader from './components/Loader.vue'
const booksList = useBooksList();

</script>

<template>
  {{ booksList.loader }}
  <main class="container-fluid">
    <header class="header mb-3" id="ancor2">
      <h2 class="h2 text-info text-center">My favorite books</h2>
      <div class="tabs d-flex justify-content-center mb-3 gap-4">
        <button class="btn btn-primary">Favorite</button>
        <button class="btn btn-primary">Search</button>
      </div>
    </header>
    <h5>Количество книг: {{ booksList.countBooks }}</h5>
    <Loader />
    <Books v-for="book of booksList.goData" :key="book.cover_i" :book="book" />
  </main>
</template>

