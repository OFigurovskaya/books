import { defineStore } from "pinia";
import axios from 'axios';

export const useBooksList = defineStore('BooksList', {
    state: () => ({
        booksList: []
    }),
    getters: {
        goData() {
            axios
                .get('https://openlibrary.org/search.json?q=love')
                .then(response => this.booksList = response.data.docs)
                .catch(error => console.log(error.message))
                for (let elem of this.booksList) {
                    elem.isReader = false;
                }
                return (this.booksList );
        },
        countBooks() {
            console.log(this.booksList);
            return (this.booksList.length);
        },
    },
    actions: {
        authorName(str) {
            return String(str);
        }
    }
})