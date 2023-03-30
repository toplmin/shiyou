import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/base.css'
// 引入icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

// 挂载icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).mount('#app')
