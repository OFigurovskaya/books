import { defineStore } from "pinia";
import { useBooksList } from '../stores/BooksBase'
import { ref } from 'vue'

export const useSearch = defineStore('search', () => {
    const booksList = useBooksList();
    const searchText = ref('');
    const searchBooks = ref([]);
    const loader = ref(false)
    const errorText = ref('')


    //поиск книги по имени
    const goSearch = () => {
        loader.value = true;
        setTimeout(() => {
            searchBooks.value = (booksList.booksList.filter(el => el.title.includes(searchText.value)));
            errorText.value = '';
            searchText.value = '';
            //усли книга не найдена:
            if (searchBooks.value.length === 0) {
                loader.value = false;
                return errorText.value = 'Книга не найдена. Попробуйте поискать другую';
            }
            loader.value = false;       
        }, 1000)
    }

    return {
        goSearch,
        searchText,
        searchBooks,
        loader,
        errorText
    }
})