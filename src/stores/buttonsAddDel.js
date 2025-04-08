import { defineStore } from "pinia";
import { ref, onMounted } from 'vue';

export const useButtonsAddDel = defineStore('buttonsAddDel', () => {
    
})



    // console.log( favoriteBooks.value);
    // console.log(favoriteBooks.value.indexOf(booksList.value[idx]));
    // if(favoriteBooks.value.indexOf(booksList.value[idx].cover_i) === -1) {
    //     favoriteBooks.value.push(booksList.value[idx])
    // } else {
    //      favoriteBooks.value = favoriteBooks.value.filter(el => el !== booksList.value[idx])      
    // } 
    // // localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks.value));
    // console.log(favoriteBooks.value);
    // loadFromLocalStorage()


    // watch(favoriteBooks, (state) => {
    //     state = favoriteBooks.value
    //     // console.log(state);
    //     localStorage.setItem('favoriteBooks', JSON.stringify(state));
    // });

    // Добавление избранных книг в ЛС
    // const loadFromLocalStorage = () => {
    //     localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks.value));
    // };

    // watch(favoriteBooks, (state) => {
    //     console.log(state);
    //     localStorage.setItem('favoriteBooks', JSON.stringify(state));
    // });