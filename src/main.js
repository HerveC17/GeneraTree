import { createApp } from 'vue'
import { createPinia } from 'pinia'
import GeneraTree from './GeneraTree.vue'

//import './assets/main.css'
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

export var geneaDAG = new Array()
export const foreFatherIndex = 0
export const foreMotherIndex = 1
 
/* Variables temporaires pour les différents individus possiblement trouvés dans FamilySearch   */

export var tempIndividual, tempFather, tempMother, tempSpouse, tempStepFather, tempStepMother = ""

/*****
 * 
 *  Démarrage du programme ICI
 * 
 *****/

const pinia=createPinia()
const app=createApp(GeneraTree)
app.use(pinia)
//app.use(bootstrap)
app.mount('#app')