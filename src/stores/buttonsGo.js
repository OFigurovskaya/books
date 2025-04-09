import { defineStore } from "pinia";
import { ref, onMounted } from 'vue';

export const useButtonsGo = defineStore('buttonsGo', () => {
    const handleScroll = (id) => {
        const elem = document.getElementById(id);
        elem.scrollIntoView();
    };

    return {
        handleScroll
    }
})

