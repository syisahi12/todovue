import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global/body.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
createApp(App).use(router).mount('#app')
