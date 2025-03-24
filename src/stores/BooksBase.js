import { defineStore } from "pinia";
import { ref, onMounted } from 'vue';

export const useBooksList = defineStore('booksList', () => {
    const booksList = ref([]);
    const loader = ref(false);
    const activeTab = ref(1);
    const goData = async () => {
        loader.value = true;
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=love');
            const json = await response.json();
            booksList.value = json.docs;
            for(let elem of booksList.value) {
                elem.isWatched = true;
            }
            console.log(booksList.value);
        } catch(error) {
            console.error("Error fetching photos:", error);
        } finally {
            loader.value = false;
        }
    };
    const countBooks = () => {
        return (booksList.value.length);
    };
    const authorName = (str) => {
        return String(str);
    };
    const filterBooks = () => {
        return booksList.value.filter((el) => el.isWatched === true)
    }
    onMounted(() => {
        goData()
    })
    return {
        booksList, loader, goData, countBooks, authorName, activeTab, filterBooks
    }
})