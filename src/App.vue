<script setup>
import { useBooksList } from './stores/BooksBase';
const booksList = useBooksList();

</script>

<template>
  <main>
    <h5>Count books: {{ booksList.countBooks }}</h5>
    <!-- {{ booksList.goData }} -->
    <div class="card" v-for="elem in booksList.goData" :key="elem.cover_i">
      {{ elem.title }}
      <div class="card-body">
        <h5 class="card-title">{{ elem.title }}</h5>
        <h6 class="card-text">{{ booksList.authorName }}</h6>
        <p class="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять
          основную часть содержимого карты.</p>
        <a href="#" class="btn btn-primary">Перейти куда-нибудь</a>
      </div>
    </div>

    <!-- <p >{{ elem.isReader }}, ,  {{
      elem.first_publish_year }}, {{ elem.language }} </p> -->
  </main>
</template>

