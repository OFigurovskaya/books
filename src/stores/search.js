import { defineStore } from "pinia";
import { useBooksList } from '../stores/BooksBase'
import { ref } from 'vue'

export const useSearch = defineStore('search', () => {
const booksList = useBooksList();
const searchText = ref('');
const searchBooks = ref([]);
const loader = ref(false)

const goSearch = () => {
    loader.value = true;
    setTimeout(() => { 
        // console.log(booksList.booksList.filter(el => el.title.includes(searchText.value)));
        // if(booksList.booksList.filter(el => el.title.includes(searchText.value))) {
              searchBooks.value =  (booksList.booksList.filter(el => el.title.includes(searchText.value)));
        loader.value = false;
        // }
    }, 1000)
}


    return {
        goSearch,
        searchText,
        searchBooks,
        loader
    }
})