<script setup>
import { useXLSXfilesStore } from '../Store/XLSXfiles'
const XLSXfiles=useXLSXfilesStore()
</script>

<!--
    Lit simplement les fichiers XLSX successivement et de manière asynchrone.
-->

<script>
import * as XLSX from 'xlsx/xlsx.mjs'
import * as fs from 'fs' // load 'fs' for readFile and writeFile support
XLSX.set_fs(fs)

export async function loadFiles(dataFile, namesFile, citiesFile) {
  try {
    await readFileAsync(dataFile)
  } catch (err) {
    console.log('Error while loading Excel data file: ' + dataFile + ' --- ' + err)
  }
  try {
    await readNamesAsync(namesFile)
  } catch (err) {
    alert('Error while loading names file: ' + namesFile + ' --- ' + err)
  }
  try {
    await readCitiesAsync(citiesFile)
  } catch (err) {
    alert('Error while loading cities file: ' + citiesFile + ' --- ' + err)
  }
}

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const data = event.target.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]])
      if (roa.length > 0) {
        for (let i = 0; i < roa.length; i++) {
          XLSXfiles.mappedData.push(mapNode(roa[i], i)) // Pinia: ajout de loadFileStore
        }
      }

      // Displaying the JSON result (to be deleted at the end)
      //
      const resultEle = document.getElementById('json-result') // "json-result" est une textArea
      resultEle.value = JSON.stringify(roa, null, 1) // Convertit roa en JSON
      resultEle.style.display = 'block' // et l'affiche avec le style 'block'

      resolve(true) // resolve(event.target.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsArrayBuffer(file)
  })
}

function readNamesAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const data = event.target.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]])
      if (roa.length > 0) {
        for (let i = 0; i < roa.length; i++) {
          XLSXfiles.namesBase.push(mapNames(roa[i])) // Pinia: ajout de loadFileStore
        }
      }
      resolve(true) // resolve(event.target.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsArrayBuffer(file)
  })
}

function readCitiesAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const data = event.target.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]])
      if (roa.length > 0) {
        for (let i = 0; i < roa.length; i++) {
          XLSXfiles.placesArray.push(mapPlaces(roa[i])) // Pinia: ajout de loadFileStore
        }
      }
      resolve(true) // resolve(event.target.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsArrayBuffer(file)
  })
}

/*****
 * 
 * Peuple un noeud avec les données Excel de l'individu
 * 
 *****/

function mapNode(aRecord, index) {
  // Peuple le noeud
  //
  var workingNode = {
    indexInTable: index, // Mostly, the line number in the Excel spreadsheet
    score: aRecord.score,
    arkId: aRecord.arkId,
    sourceMediaType: aRecord.sourceMediaType,
    batchNumber: aRecord.batchNumber,
    roleInRecord: aRecord.roleInRecord,
    relationshipToHead: aRecord.relationshipToHead,
    name: {
      fullName: aRecord.fullName,
      givenNameArray: [],
      surName: ''
    },
    sex: aRecord.sex,
    birth: {
      dateOriginal: aRecord.birthLikeDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.birthPlaceText
    },
    christening: {
      dateOriginal: aRecord.chrDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.chrPlaceText
    },
    residence: {
      dateOriginal: aRecord.residenceDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.residencePlaceText
    },
    marriage: {
      dateOriginal: aRecord.marriageLikeDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.marriageLikePlaceText
    },
    death: {
      dateOriginal: aRecord.deathLikeDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.deathLikePlaceText
    },
    burial: {
      dateOriginal: aRecord.burialDate,
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      },
      placeText: aRecord.burialPlaceText
    },
    otherEvent: {
      otherEventOriginal: aRecord.otherEvents,
      name: '',
      place: '',
      exactDateFormal: {
        day: '',
        month: '',
        year: ''
      }
    },
    father: {
      fullName: aRecord.fatherFullName,
      givenNameArray: [],
      surName: ''
    },
    mother: {
      fullName: aRecord.motherFullName,
      givenNameArray: [],
      surName: ''
    },
    spouse: {
      fullName: aRecord.spouseFullName,
      givenNameArray: [],
      surName: ''
    },
    parentFullNames: [],
    childrenFullNames: [],
    otherFullNames: aRecord.otherFullNames,
    otherEvents: [],
    toFather: null, // Index dans geneDAG: un seul père, normalement
    toMother: null, // Index dans geneDAG: une seule mère, normalement
    toSpouseList: [], // Index dans geneDAG: plusieurs époux/épouses possibles
    toChildList: [] // Index dans geneDAG: plusieurs enfants possibles
  }
  return workingNode
}

function mapNames(record) {
  let nameRecord = {
    name: record.originalName,
    sex: record.sex,
    given: record.givenName === 'True',
    family: record.familyName === 'True',
    country: record.country
  }
  return nameRecord
}

// *****
//
//   Fonction pour décoder un enregistrement des lieux depuis le fichier Excel
//
// *****

function mapPlaces(record) {
  let placeRecord = {
    fullname: record.Fullname,
    town: record.Commune,
    province: record.Province,
    region: record.Region,
    country: record.Pays,
    decLatitude: record.Lat_dec,
    decLongitude: record.Long_dec,
    DMSLatitude: record.Lat_DMS,
    DMSLongitude: record.Long_DMS
  }
  return placeRecord
}
</script>