import { defineStore } from "pinia";
import axios from 'axios';

export const useBooksList = defineStore('BooksBase', {
    state: () => ({
        booksList: []
    }),
    getters: {
        goData() {
            axios
                .get('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
                .then(response => this.booksList = response.data.docs)
                .catch(error => console.log(error.message))
                for (let elem of this.booksList) {
                    elem.isReader = false;
                }
                return (this.booksList );
        },
        countBooks() {
            return (this.booksList.length);
        }
   
    }
})