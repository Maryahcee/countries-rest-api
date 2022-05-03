export default {
    
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
}



