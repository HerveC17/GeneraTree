import { createApp } from 'vue'
import GeneraTree from './GeneraTree.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

/******
 * 
 *   Variables globales
 * 
 */

/* Données chargées depuis les fichiers Excel indiqués par l'utilisateur                        */

export var mappedData = new Array()    // Liste des événements importés depuis FamilySearch
export var namesBase = new Array()     // Liste des prénoms (italiens)
export var placesArray = new Array()   // Liste des villes (de Sicile pour l'instant)

/* Variables temporaires pour les différents individus possiblement trouvés dans FamilySearch

var tempIndividual, tempFather, tempMother, tempSpouse, tempStepFather, tempStepMother = ""
*/

createApp(GeneraTree).use(bootstrap).mount('#app')
