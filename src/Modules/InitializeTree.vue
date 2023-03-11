<script setup>
import { useXLSXfilesStore } from '../Store/LoadFileStore'
import { useDAGStore } from '../Store/DAGStore'
const XLSXfiles = useXLSXfilesStore()
const DAGStore = useDAGStore()
</script>

<script>
import { foreFatherIndex, foreMotherIndex } from '../main.js'

//import { theFamilyNameCapitalized } from '/Users/hervecaci/GeneaTree/src/components/GeneraTreeWelcome.vue'

// *****
// *
// *  Initialise l'arbre avec uniquement l'ancêtre mâle et son épouse
// *
// *****

export function pushAnEmptyTree() {
  // Create a first empty node and populate it with defaults characteristics of the forefather
  //
  pushAnEmptyNode()
  DAGStore.geneaDAG[foreFatherIndex].name[0].indexInTable = -1
  DAGStore.geneaDAG[foreFatherIndex].name[0].fullName = 'Unk ' + XLSXfiles.theFamilyNameCapitalized + ' (forefather)'
  DAGStore.geneaDAG[foreFatherIndex].name[0].givenNameArray[0] = 'Unk'
  DAGStore.geneaDAG[foreFatherIndex].name[0].surname = XLSXfiles.theFamilyNameCapitalized + ' (forefather)'
  DAGStore.geneaDAG[foreFatherIndex].sex[0].indexInTable = -1
  DAGStore.geneaDAG[foreFatherIndex].sex[0].value = 'Male'

  // Create a second empty node and Populate it with defaults characteristics of the foremother
  //
  pushAnEmptyNode()
  DAGStore.geneaDAG[foreMotherIndex].name[0].indexInTable = -1
  DAGStore.geneaDAG[foreMotherIndex].name[0].fullName = 'Unk Unk (foremother)'
  DAGStore.geneaDAG[foreMotherIndex].name[0].givenNameArray[0] = 'Unk'
  DAGStore.geneaDAG[foreMotherIndex].name[0].surname = 'Unk (foremother)'
  DAGStore.geneaDAG[foreMotherIndex].sex[0].indexInTable = -1
  DAGStore.geneaDAG[foreMotherIndex].sex[0].value = 'Female'

  // Link those two nodes together
  //
  DAGStore.geneaDAG[foreFatherIndex].toSpouseList[0] = foreMotherIndex
  DAGStore.geneaDAG[foreMotherIndex].toSpouseList[0] = foreFatherIndex
}

/*******
 *
 *  Pousse dans l'arbre GeneaDAG un noeud vide (par défaut)
 *
 *******/

// Chaque variable dans un noeud doit contenir l'index dans la table (c'est-à-dire le numéro
// de la ligne dans la feuille Excel).
//
// Chaque variable est une Array car il peut y avoir plusieurs lignes dans la feuille Excel
// pour un même événement (plusieurs mariages) ou pour une même personne (naissance, décès)

function pushAnEmptyNode() {
  let dummyNode = {
    score: [{ indexInTable: null, value: '' }],
    arkId: [{ indexInTable: null, value: '' }],
    sourceMediaType: [{ indexInTable: null, value: '' }],
    batchNumber: [{ indexInTable: null, value: '' }],
    roleInRecord: [{ indexInTable: null, value: '' }],
    relationshipToHead: [{ indexInTable: null, value: '' }],
    name: [{ indexInTable: null, fullName: '', givenNameArray: [], surname: '' }],
    sex: [{ indexInTable: null, value: '' }],
    anEvent: [
      {
        indexInTable: null,
        eventType: '', // Birth, Christening, Residence, Marriage, Death, Burrial
        dateOriginal: '',
        exactDateFormal: {
          day: '',
          month: '',
          year: ''
        },
        placeText: '',
        father: { fullName: '', givenNameArray: [], surname: '' },
        mother: { fullName: '', givenNameArray: [], surname: '' },
        spouse: { fullName: '', givenNameArray: [], surname: '' }
      }
    ],
    toFather: null,     // Index dans geneaDAG: un seul père, normalement
    toMother: null,     // Index dans geneaDAG: une seule mère, normalement
    toSpouseList: [],   // Index dans geneaDAG: plusieurs époux/épouses possibles
    toChildList: []     // Index dans geneaDAG: plusieurs enfants possibles
  }
  DAGStore.geneaDAG.push(dummyNode)
}
</script>