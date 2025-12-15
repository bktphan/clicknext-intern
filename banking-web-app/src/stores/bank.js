import { defineStore } from "pinia"

export const useBankStore = defineStore("bank", {
    state: () => ({
        transactions: JSON.parse(localStorage.getItem('my_bank_transactions')) || []
    }),
    getters: {
        balance: (state) => {
            return state.transactions.reduce((total, t) => {
                return t.type === 'deposit'
                    ? total + Number(t.amount)
                    : total - Number(t.amount) 
            }, 0)
        }
    },
    actions: {
        saveData() {
            localStorage.setItem('my_bank_transactions', JSON.stringify(this.transactions))
        },
        addTransaction(payload) {
            this.transactions.push({
                id: Date.now(),
                date: new Date().toLocaleString('en-GB'),
                ...payload
            })
            this.saveData()
        },
        deleteTransaction(id) {
            this.transactions = this.transactions.filter(t => t.id !== id)
            this.saveData()
        },
        editTransaction(id, newAmount) {
            const found = this.transactions.find(t => t.id === id)
            if (found) {
                found.amount = Number(newAmount)
                this.saveData()
            }
        }
    }
})