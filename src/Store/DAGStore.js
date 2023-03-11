/*****
 * 
 * DAGStore: Définit un store
 * 
 * Ces variables sont initialisées dans "InitializeTree"
 * 
 *****/

import { defineStore } from 'pinia'

export const useDAGStore = defineStore('DAG' /* the unique ID */, {
    state() {
        return {
            geneaDAG: [],           // L'arbre généalogique !!
            tempIndividual: "",     // Variables temporaires pour les différents
            tempFather: "",         // individus possiblement trouvés dans FamilySearch
            tempMother: "",
            tempSpouse: "",
            tempStepFather: "",
            tempStepMother: "",
            foreFatherIndex: 0,     // A considérer comme une constante
            foreMotherIndex: 1      // A considérer comme une constante
        }
    }
})