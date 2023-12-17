import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {

    state: () => {
        return {
            currancyList: []
        }
    },
    actions: {
        async fetchcurrancyHandler() {

            try {
                const httpRequest = await fetch("https://api.wallex.ir/v1/markets")
                const httpRespance = await httpRequest.json()
                for (let list in httpRespance.result.symbols) {
                    let data = httpRespance.result.symbols[list]
                    this.currancyList.push(data)
                }

            } catch (e) {

            }

        },
    }
})