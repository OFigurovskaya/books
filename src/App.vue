<script setup>
import { useBooksList } from './stores/BooksBase';
import Books from './components/Books.vue';
import Loader from './components/Loader.vue'
const booksList = useBooksList();

</script>

<template>
  <main class="container-fluid">
    <header class="header mb-3" id="ancor2">
      <h2 class="h2 text-info text-center">My favorite books</h2>
      <div class="tabs d-flex justify-content-center mb-3 gap-4">
        <button class="btn btn-primary">Избранные книги</button>
        <button class="btn btn-primary">Поиск</button>
      </div>
    </header>
    <Loader v-if="booksList.loader"/>
    <div v-if="booksList.activeTab === 1">
      <h5>Количество книг: {{ booksList.countBooks() }}</h5>
      <Books  v-for="book of booksList.booksList" :key="book.cover_i" :book="book" />
    </div>
    <div v-if="booksList.activeTab === 2">Block Search</div>
  </main>
</template>

