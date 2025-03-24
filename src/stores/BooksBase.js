import { defineStore } from "pinia";
import { ref, onMounted } from 'vue';

export const useBooksList = defineStore('booksList', () => {
    const booksList = ref([]);
    const loader = ref(false);
    const activeTab = ref(1);
    const favoriteBooks = ref([]);

    //Запрос общего списка книг
    const goData = async () => {
        loader.value = true;
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=love');
            const json = await response.json();
            booksList.value = json.docs;
            for(let elem of booksList.value) {
                elem.isWatched = true;
            }
        } catch(error) {
            console.error("Error fetching photos:", error);
        } finally {
            loader.value = false;
        }
    };

    //Количество книг (весь список)
    const countBooks = () => {
        return (booksList.value.length);
    };

    //Получение имени автора
    const authorName = (str) => {
        return String(str);
    };

    //Получение списка избранных книг
    const filterBooks = () => {
        favoriteBooks.value = booksList.value.filter((el) => el.isWatched === false)
        return favoriteBooks.value
    }

    //Количество избранных книг 
    const countBooksFilter = () => {
        return (filterBooks().length);
    }  

    onMounted(() => {
        goData()
    })

    //добавление книги в избранное
    const favoriteBooksAdd = (id) => {
        for (let elem of booksList.value) {
            console.log(elem['8238738']);
        }
        console.log(booksList.value['8238738']);
    }

    return {
        booksList, loader, goData, countBooks, authorName, activeTab, filterBooks, countBooksFilter, favoriteBooks, favoriteBooksAdd
    }
})