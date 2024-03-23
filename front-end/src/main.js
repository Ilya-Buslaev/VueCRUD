import { createApp } from 'vue'
import App from './App.vue'
import ContList    from './components/ContList.vue'
import AddEditCont from './components/AddEditCont.vue'
import ViewDelCont from './components/ViewDelCont.vue'
import NavBar      from './components/NavBar.vue'

const app = createApp(App)
app.component('cont-list',     ContList)
app.component('add-edit-cont', AddEditCont)
app.component('view-del-cont', ViewDelCont)
app.component('nav-bar',       NavBar)
app.mount('#app')
