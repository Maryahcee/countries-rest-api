import { createStore } from 'vuex'
import axios from 'axios'
import serviceApi from '../apis/index'

export default createStore({
    state:{
        countries: [ ],
    },
    mutations: {
        // Mutation handlers (pass state object)
        SET_COUNTRIES(state, country) {
            console.log(country)
            state.countries = country.data
          },
    },
    getters: {
        getAllCountries: state =>{
            return state.countries
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
              })
       }
    }
})