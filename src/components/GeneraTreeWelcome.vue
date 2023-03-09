<script setup>
  import { useLoadFileStore } from '/Users/hervecaci/GeneaTree/src/Store/LoadFileStore'
  const loadFileStore = useLoadFileStore()
</script>

<template>
  <form @submit.prevent="onSubmitForm" v-if="formValues.showForm">
    <!--<button v-on:click="formValues.showForm = !formValues.showForm">Afficher le formulaire</button> -->
    <div class="row g-3 needs-validation" fileOfEvents>
      <div class="col-md-9">
        <label for="dataFilename" class="form-label">Fichier des événements</label>
        <input type="file" id="dataFilename" ref="dataFilename" @change="onDataFilenameChange" accept=".xlsx" required>
        <div class="valid-feedback">
          Ça semble correct!
        </div>
      </div>
      <div class="col-md-9">
        <label for="nameFilename" class="form-label">Fichier des noms et prénoms</label>
        <input type="file" id="nameFilename" ref="nameFilename" @change="onNameFilenameChange" accept=".xlsx" required>
        <div class="valid-feedback">
          Ça semble correct!
        </div>
      </div>
      <div class="col-md-9">
        <label for="cityFilename" class="form-label">Fichier des communes</label>
        <input type="file" id="cityFilename" ref="cityFilename" @change="onCityFilenameChange" accept=".xlsx" required>
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
</template>

<script>
import { loadFiles } from '/Users/hervecaci/GeneaTree/src/Modules/LoadFiles'
import { createEmptyNode } from '/Users/hervecaci/GeneaTree/src/Modules/InitializeTree'
export default {
  data() {
    return {
      formValues: {
        dataFilename: '',
        nameFilename: '',
        cityFilename: '',
        familyName: '',
        showForm: true,
        formSubmitted: false
      },
      theFamilyNameCapitalized:'',
    }
  },
  methods: {
    onSubmitForm(event) {
      event.preventDefault()
      event.stopPropagation()
      this.formValues.formSubmitted = true

      // Récupère le nom recherché et cache le formulaire
      loadFileStore.theFamilyName = this.formValues.familyName.toLowerCase()
      loadFileStore.theFamilyNameCapitalized = loadFileStore.theFamilyName.charAt(0).toUpperCase() + loadFileStore.theFamilyName.slice(1)
      this.formValues.showForm = false

      // Charge les fichiers XLSX dans les trois tableaux
      loadFiles(this.formValues.dataFilename, this.formValues.nameFilename, this.formValues.cityFilename)

      // Crée un arbre généalogique avec deux ancêtres
      createEmptyNode()
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