import { defineStore } from "pinia";
import { ref } from 'vue';

export const useChangeTheme = defineStore('changeTheme', () => {
    const textChangeText = ref('Темная тема');

    const goChangeTheme = () => {
        if (document.querySelector('.changeBtn').classList.contains('btn-dark')) {
            document.querySelector('.changeBtn').classList.remove('btn-dark');
            document.querySelector('.changeBtn').classList.add('btn-light');
            document.querySelector('.thene').classList.remove('ligth');
            document.querySelector('.thene').classList.add('dark');
            textChangeText.value = 'Светлая тема'
        } else {
            document.querySelector('.changeBtn').classList.remove('btn-light');
            document.querySelector('.changeBtn').classList.add('btn-dark');
            document.querySelector('.thene').classList.remove('dark');
            document.querySelector('.thene').classList.add('ligth');
            textChangeText.value = 'Темная тема'
        }

    }

    return {
        textChangeText,
        goChangeTheme
    }
}) 