<script setup>
import { useBooksList } from './stores/BooksBase';
import Books from './components/Books.vue';
import Loader from './components/Loader.vue'
const booksList = useBooksList();

const toggleTab = (id) => {
  booksList.toggleActiveTab(id)
}

</script>

<template>
  <main class="container-fluid">
    <header class="header mb-3" id="ancor2">
      <h2 class="h2 text-info text-center">My favorite books</h2>
      <div class="tabs d-flex justify-content-center mb-3 gap-4">
        <button :class="['btn', 'btn_lg',  'btn-primary ', { 'btn-success': booksList.activeTab === 1 }]" @click="toggleTab(1)">Избранные книги</button>
        <button :class="['btn', 'btn_lg', 'btn-primary ', { 'btn-success': booksList.activeTab === 2 }]" @click="toggleTab(2)">Поиск</button>
      </div>
    </header>
    <Loader v-if="booksList.loader"/>
    <div v-if="booksList.activeTab === 1">
      <div>
        <h5>Количество всех книг: {{ booksList.countBooks() }}</h5>
      <Books  v-for="book of booksList.booksList" :key="book.cover_i" :book="book" />
      </div>
      <div>
        <h5>Количество избранных книг: {{ booksList.countBooksFilter() }}</h5>
      <Books  v-for="book of booksList.favoriteBooks" :key="book.cover_i" :book="book" />
      </div>
    </div>
    <div v-if="booksList.activeTab === 2">Block Search</div>
  </main>
</template>

