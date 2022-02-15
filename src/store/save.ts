import { createPinia } from 'pinia'
import type   { App } from "vue";
import piniaPluginPersist from 'pinia-plugin-persist'


export function setupStore(app: App<Element>) {
    const pinia = createPinia();
    pinia.use(piniaPluginPersist);
    app.use(pinia);
}
