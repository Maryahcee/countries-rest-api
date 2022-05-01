import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

//import store
import store from './store/store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMoon } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faMoon)

const app = createApp(App)

app.use(router)

app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

