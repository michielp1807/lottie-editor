import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

createApp(App).use(store).use(router).mount('#app')

export function downloadDataAsFile(filename: string, extension: string, data: string | Uint8Array) {
    const blob = new Blob([data], {
        type: "application/octet-stream"
    });
    const url = window.URL.createObjectURL(blob);

    if (!filename) {
        filename = "sticker";
    }

    const linkElement = document.createElement('a');
    linkElement.setAttribute("href", url);
    linkElement.setAttribute("download", filename + extension);
    linkElement.style.display = 'none';

    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
}