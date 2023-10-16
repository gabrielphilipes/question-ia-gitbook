import { defineStore } from 'pinia'
import { ChatStores } from '~/types/ChatStores'

export const useChatStore = defineStore('counter', {
    state: (): ChatStores => ({
        stage: 0,
    }),

    getters: {
        showChat(state: ChatStores): boolean {
            return state.stage === 1
        }
    },

    actions: {
        changeStage() {
            this.stage = this.stage === 0 ? 1 : 0
        }
    },
})
