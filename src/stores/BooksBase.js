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
            for (let elem of booksList.value) {
                elem.isFavorite = false;
            }
        } catch (error) {
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
        favoriteBooks.value = booksList.value.filter((el) => el.isFavorite === true)
        return favoriteBooks.value
    }

    //Количество избранных книг 
    const countBooksFilter = () => {
        return (filterBooks().length);
    }



    //добавление книги в избранное
    const favoriteBooksToogle = (id) => {
        const cover_i = id;
        const idx = booksList.value.findIndex((el) => el.cover_i === cover_i);
        booksList.value[idx].isFavorite = !booksList.value[idx].isFavorite;
        console.log(favoriteBooks.value);
    };



    //удаление книги из избранного (не работает)
    const favoriteBooksDel = (id) => {
        const cover_i = id;
        favoriteBooks.value = favoriteBooks.value.filter(book => book.cover_i !== id);
        return (favoriteBooks.value);
    };


    //переключение activeTab
    const toggleActiveTab = (id) => {
        activeTab.value = id;
    }

    onMounted(() => {
        goData();

    })

    return {
        booksList, loader, goData, countBooks, authorName, activeTab, filterBooks, countBooksFilter, favoriteBooks, favoriteBooksToogle, favoriteBooksDel, toggleActiveTab
    }
})