import { createApp } from 'vue'
import { createPinia } from 'pinia'
import GeneraTree from './GeneraTree.vue'       // Equivalent de App et de './App.vue'
import { useXLSXfilesStore } from'./Store/XLSXfiles.js'

//import bootstrap from 'bootstrap'

// Autre manière de faire, mais je ne sais pas comment l'utiliser avec .mount(#app)
//
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

/******
 * 
 *   Variables globales
 * 
 */

/* Données chargées depuis les fichiers Excel indiqués par l'utilisateur                        */

//export var mappedData = new Array()    // Liste des événements importés depuis FamilySearch
//export var namesBase = new Array()     // Liste des prénoms (italiens)
//export var placesArray = new Array()   // Liste des villes (de Sicile pour l'instant)

/* Arbre généalogique (DAG). Voir "initializeTree()"                                            */

// export var geneaDAG = new Array()

export const foreFatherIndex = 0
export const foreMotherIndex = 1
 
/* Variables temporaires pour les différents individus possiblement trouvés dans FamilySearch   */

//export var tempIndividual, tempFather, tempMother, tempSpouse, tempStepFather, tempStepMother = ""

/*****
 * 
 *  Démarrage du programme ICI
 * 
 *****/

const pinia = createPinia()
const app = createApp(GeneraTree)
app.use(pinia)
const XLSXfiles = useXLSXfilesStore()
export { XLSXfiles }
app.mount('#app')