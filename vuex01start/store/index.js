import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getter.js';
import counterModule from './counter/index.js';


const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            auth: false
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store;