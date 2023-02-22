import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "@/router";
import 'element-plus/dist/index.css'

// form-create
import formCreate from '@yy306525121/form-create-element-ui'
import FcDesigner from '@yy306525121/form-create-designer'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(formCreate)
app.use(FcDesigner)
app.mount('#app')
