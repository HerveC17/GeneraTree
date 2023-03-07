import { createApp } from 'vue'
import GeneraTree from './GeneraTree.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

createApp(GeneraTree).use(bootstrap).mount('#app')

console.log("Si cela apparaît, je n'ai pas réussi à empêché la soumission par défaut du formulaire")