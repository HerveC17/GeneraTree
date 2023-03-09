/*****
 * 
 * LoadFileStore: Définit un store
 * 
 * Ces variables sont initialisées dans "GeneraTreeWelcome.vue" et les données
 * récupérées depuis les fichiers XLSX dans les trois tableaux par le module "LoadFiles"
 * 
 *****/

import { defineStore } from 'pinia'

export const useLoadFileStore = defineStore('loadFileStore' /* the unique ID */, {
    state() {
        return {
            mappedData: [],                 // Liste des événements importés depuis FamilySearch
            namesBase: [],                  // Liste des prénoms (italiens)
            placesArray: [],                // Liste des villes (de Sicile pour l'instant)
            dataFilename: "",               // Nom du fichier données
            namesFilename: "",              // Nom du fichier des noms/prénoms
            citiesFilename: "",             // Nom du fichier communes
            //
            theFamilyName: "",              // Nom de famille à suivre
            theFamilyNameCapitalized: ""    // Nom de famille en minuscules avec initiale en majuscule
        }
    }
})