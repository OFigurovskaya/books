<script setup>
import { useBooksList } from './stores/BooksBase';
const booksList = useBooksList();

</script>

<template>

  <main>
    <h5>Count books: {{ booksList.countBooks }}</h5>
    {{ booksList.goData }}
  <p v-for="elem in booksList.goData" >{{ elem.isReader }}, {{ elem.author_name }}, {{ elem.title }}, {{ elem.first_publish_year }}, {{ elem.language }} </p>
  </main>
</template>

