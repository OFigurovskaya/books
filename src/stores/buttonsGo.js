import { defineStore } from "pinia";

export const useButtonsGo = defineStore('buttonsGo', () => {
    const handleScroll = (id) => {
        const elem = document.getElementById(id);
        elem.scrollIntoView();
    };

    return {
        handleScroll
    }
})

