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
            return (this.booksList.length);
        },
        authorName() {
            console.log(this.booksList);
           for (let elem of this.booksList) {
            if (elem.author_name !==null || elem.author_name !== undefined) {
                return String(elem.author_name)
            }
           }
            
        }
   
    }
})