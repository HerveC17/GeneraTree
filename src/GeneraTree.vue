<script>
import { pushAnEmptyTree } from './components/InitializeTree.vue'
import { loadFiles } from './components/LoadFiles.vue'
import { XLSXfiles } from './main.js'

export default {
  setup() {

    //data () {
    return {
      formValues: {
        dataFilename: '',
        nameFilename: '',
        cityFilename: '',
        familyName: '',
        showForm: true,
        formSubmitted: false
      }
    }
  },
  methods: {
    onSubmitForm(event) {
      event.preventDefault()
      event.stopPropagation()
      this.formValues.formSubmitted = true

      // Récupère le nom recherché et cache le formulaire

      // avec this.XLSXfiles, j'ai:
      //      Uncaught TypeError: Cannot set properties of undefined (setting 'theFamilyName')
      //      at Proxy.onSubmitForm (GeneraTree.vue:81:40) -- Ligne 89
      //
      // avec XLSXfiles, j'ai:
      //      Uncaught ReferenceError: XLSXfiles is not defined at Proxy.onSubmitForm
      //      (GeneraTree.vue:85:7)  -- Ligne 89

      // NB: sortie OK console.log("family Name is: " + this.formValues.familyName.toLowerCase())

      XLSXfiles.theFamilyName = this.formValues.familyName.toLowerCase()
      XLSXfiles.theFamilyNameCapitalized = XLSXfiles.theFamilyName.charAt(0).toUpperCase() + XLSXfiles.theFamilyName.slice(1)
      this.formValues.showForm = false

      // Charge les fichiers XLSX dans les trois tableaux
      loadFiles(this.formValues.dataFilename, this.formValues.nameFilename, this.formValues.cityFilename)

      // Crée un arbre généalogique avec deux ancêtres
      pushAnEmptyTree()
    },
    onDataFilenameChange() {
      this.formValues.dataFilename = this.$refs.dataFilename.files[0]
    },
    onNameFilenameChange() {
      this.formValues.nameFilename = this.$refs.nameFilename.files[0]
    },
    onCityFilenameChange() {
      this.formValues.cityFilename = this.$refs.cityFilename.files[0]
    }
  }
}
</script>

<template>
  <div id="app" class="container-sm">
    <header class="mb-20 flex justify-center">
      <h1 class="green"> GeneraTree: le générateur d'arbre généalogique</h1>
      <h3>par Hervé Caci - version 0.0.1 - Mars 2023</h3>
    </header>
    <div class="askForFilesAndName">
      <form @submit.prevent="onSubmitForm" v-if="formValues.showForm">
        <div class="row g-3 needs-validation" fileOfEvents>
          <div class="col-md-9">
            <label for="dataFilename" class="form-label">Fichier des événements</label>
            <input type="file" id="dataFilename" ref="dataFilename" @change="onDataFilenameChange" accept=".xlsx"
              required>
            <div class="valid-feedback">
              Ça semble correct!
            </div>
          </div>
          <div class="col-md-9">
            <label for="nameFilename" class="form-label">Fichier des noms et prénoms</label>
            <input type="file" id="nameFilename" ref="nameFilename" @change="onNameFilenameChange" accept=".xlsx"
              required>
            <div class="valid-feedback">
              Ça semble correct!
            </div>
          </div>
          <div class="col-md-9">
            <label for="cityFilename" class="form-label">Fichier des communes</label>
            <input type="file" id="cityFilename" ref="cityFilename" @change="onCityFilenameChange" accept=".xlsx"
              required>
            <div class="valid-feedback">
              Ça semble correct!
            </div>
          </div>
          <div class="col-md-9">
            <label for="familyName">Nom de famille à traiter</label>
            <input type="text" id="familyName" v-model="formValues.familyName">
          </div>
          <div class="col-12">
            <button class="btn btn-primary" id="click_button" type="submit"> Commencer </button>
          </div>
        </div>
      </form>
      <!-- container to display the json result: to be deleted-->
      <textarea id="json-result" style="display:none; height: 500px; width:350px"></textarea>
    </div>
  </div>
</template>
