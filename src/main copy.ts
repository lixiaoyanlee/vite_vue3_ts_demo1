import { createApp } from 'vue'
import "utils/rem"
import "styles/index.scss"
import App from './App.vue'

import router from "./router";
import {store,key} from "./store/indexVuex";

import vant3 from  './plugins/vant3'


createApp(App)
.use(router)
.use(store,key)
.use(vant3)
.mount('#app')