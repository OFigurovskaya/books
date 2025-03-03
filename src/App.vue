<script setup>
import { useBooksList } from './stores/BooksBase';
const booksList = useBooksList();

</script>

<template>
  <main class="container-fluid">
    <header class="header mb-3" id="ancor2">
      <h2 class="h2 text-info text-center">My favorite books</h2>
      <div class="tabs d-flex justify-content-center mb-3 gap-4">
      <button class="btn btn-primary">Favorite</button>
      <button class="btn btn-primary" >Search</button>
    </div>
    </header>
    <h5>Количество книг: {{ booksList.countBooks }}</h5>
    <div class="card" v-for="elem in booksList.goData" :key="elem.key">
      <div class="card-body">
        <h5 class="card-title">{{ elem.title }}</h5>
        <h6 class="card-text">{{ booksList.authorName(elem.author_name) }}</h6>
        <p class="card-text">количество страниц: {{ elem.edition_count }} стр.</p>
        <p class="card-text">первая публикация: {{ elem.first_publish_year }} </p>
        <h6 class="card-text">Языки:</h6>
        <ul class="list-group list-group-flush" v-for="(lang, index) in elem.language" :key="index">
          <li class="list-group-item">{{lang}}</li>
        </ul>
        <a href="#" class="btn btn-primary">Перейти куда-нибудь</a>
      </div>
    </div>

    <!-- <p >{{ elem.isReader }}, ,  {{
      elem.first_publish_year }}, {{ elem.language }} </p> -->
  </main>
</template>

