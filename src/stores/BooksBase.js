import { defineStore } from "pinia";
import { ref, onMounted, watch } from 'vue';

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
        const booksInLocalStorage = localStorage.getItem('favoriteBooks');
        // Проверка наличия данных в LocalStorage
        if (booksInLocalStorage !== null) {
            try {
                const parsedBooks = JSON.parse(booksInLocalStorage);
                // Дополнительная проверка, что загружен массив
                if (Array.isArray(parsedBooks)) {
                    favoriteBooks.value = parsedBooks;
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных из LocalStorage:', error);
            }
        }
        return favoriteBooks.value
    }



    //Количество избранных книг 
    const countBooksFilter = () => {
        return (filterBooks().length);
    }


    //добавление книги в избранное
    const favoriteBooksToogle = (id) => {
        const idx = booksList.value.findIndex((el) => el.cover_i === id);
        // Проверяем, существует ли книга
        if (idx !== -1) {
            // Переключаем состояние isFavorite
            booksList.value[idx].isFavorite = !booksList.value[idx].isFavorite;
            // Обновляем favoriteBooks
            if (booksList.value[idx].isFavorite) {
                // Если книга стала избранной, добавляем её в favoriteBooks
                favoriteBooks.value = [...favoriteBooks.value, booksList.value[idx]];
            } else {
                // Если книга больше не избранная, удаляем её из favoriteBooks
                favoriteBooks.value = favoriteBooks.value.filter(book => book.cover_i !== id);
            }
        }
        setTimeout(() => {
            activeTab.value = 1;
        }, 1000)
    };


    watch(favoriteBooks, (state) => {
        localStorage.setItem('favoriteBooks', JSON.stringify(state));
    }, { deep: true });


    //переключение activeTab
    const toggleActiveTab = (id) => {
        activeTab.value = id;
    }

    onMounted(async () => {
        await goData();

        // Синхронизация состояния isFavorite
        favoriteBooks.value.forEach(book => {
            const idx = booksList.value.findIndex(el => el.cover_i === book.cover_i);
            if (idx !== -1) {
                booksList.value[idx].isFavorite = true;
            }
        });
    });



    return {
        booksList,
        loader,
        goData,
        countBooks,
        authorName,
        activeTab,
        filterBooks,
        countBooksFilter,
        favoriteBooks,
        favoriteBooksToogle,
        toggleActiveTab,
    };
})