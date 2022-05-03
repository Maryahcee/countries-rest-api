import { createStore } from 'vuex'
import axios from 'axios'
import serviceApi from '../apis/index'
import theme from '../modules/theme'

export default createStore({
    state:{
        countries: [ ],
        theme:{},
    },
    mutations: {
        SET_COUNTRIES(state, country) {
            console.log(country)
            state.countries = country.data
          },
          SET_THEME(state, theme) {
            state.theme = theme;
            localStorage.theme = theme;
        }
    },
    getters: {
        getAllCountries: state =>{
            return state.countries
        },
        getTheme: (state) => {
            return state.theme;
        }
    },
    actions: {
        // Fetch all countries
       async fetchAllCountries({ commit }) {
           // Make a request for a country with a given Name
            let response = await axios.get(serviceApi) 
            .then((response) => {
                commit('SET_COUNTRIES', response)
            })
            .catch((error) => {
                // handle error
                console.log(error);
              });
       },
       //darkmode option
       initTheme({ commit }) {

           const cachedTheme = localStorage.theme? localStorage.theme: false;
          //  `true` if the user has set theme to `dark` on browser/OS
          const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

          if (cachedTheme)
            commit('SET_THEME', cashedTheme)
          else if (userPrefersDark)
            commit('SET_THEME', 'dark')
          else
            commit('SET_THEME', 'light')

       },
       toggleTheme({ commit }) {

        switch (localStorage.theme) {
            case 'light':
                commit('SET_THEME', 'dark')
                break;

            default:
                commit('SET_THEME', 'light')
                break;
        }
    }
    },
    
})