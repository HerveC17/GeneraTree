<template>
    <div id="nameManagement" class="roundbox boxshadow" v-if="formValues.showForm">
        <style="width: 400px; height: 250px; border: solid 2px black; padding: 0">
            </style>
            <div class="gridheader roundbox-top">
                Name database management
            </div>
            <div class="roundbox-bottom" style="background: #dedadb; width: 400px; height: 223px">
                <p class="smallAndGrey">
                    This name was not found in my database.
                    You can skip or add this name to my database specifiying
                    whether it is a male/female given name or a family name.
                    If you click on it, you may change a typographical error.
                </p>
                <input type="text" class="nameFound" id="name">
                <p class="smalltext" id="fullnameField">
                    The full name field is:
                </p>
                <p class="smalltext" id="countryField">
                    The event occured in
                </p>
                <div class="namesTypeBlock">
                    <input type="checkbox" name="name" value="First Name" @change="onGivenNameChange" id="givenName">
                    Given name<br>
                    <input type="checkbox" name="name" value="Family Name" @change="onFileNameChange" id="familyName">
                    Family name<br>
                </div>
                <div class="namesRadioBlock">
                    <input type="radio" name="gender" value="Female" id="genderFemale"
                        checked="femaleChecked == true" enabled="femaleEnabled == true">Female<br>
                    <input type="radio" name="gender" value="Male" id="genderMale"
                        checked="maleChecked == true" enabled="maleEnabled == true">Male<br>
                    <input type="radio" name="gender" value="Unisex" id="genderUnisex"
                         checked="femaleChecked == true" enabled="unisexEnabled == true">Unisex
                </div>
                <div style="text-align: center">
                    <button @click="onSkip" autofocus type="button" id="nameSkipButton">Skip </button>
                    <button @click="onProceed" type="button" id="nameAddButton">Add</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    setup() {
        //*****
        //**
        //**    Initialise le dialogue pour les noms / prénoms à ajouter dans la base
        //**
        //**    Input: (1) le nom ou le prénom
        //**           (2) les prénoms et le nom (fullname)
        //**           (3) le sexe: "Male", "Female", "Mixed" ou "ND" (donc nom de famille)
        //**           (4) le pays où l'événement est survenu
        //**
        //*****
        // function initNameDialog(name, fullname, gender, country) {

        document.getElementById("name").value = name

        switch (gender) {
            case "Male":
                //document.getElementById("genderMale").checked = true
                this.formValues.maleChecked = true
                break;
            case "Female":
                //document.getElementById("genderFemale").checked = true
                this.formValues.femaleChecked = true
                break;
            case "Mixed":
                //document.getElementById("genderUnisex").checked = true
                this.formValues.unisexChecked = true
                break;
            case "ND":
                this.femaleEnabled = false
                this.maleEnabled = false
                this.unisexEnabled = true
                this.femaleChecked = false
                this.maleChecked = false
                this.unisexChecked = false
                this.familyNameChecked = true,
                this.givenNameChecked = false
                break;
        }
        document.getElementById("fullnameField").innerText = "The full name for this event is " + fullname
        document.getElementById("countryField").innerText = "This event occured in " + country
    },
    data() {
        return {
            formValues: {
                showForm: true,
                femaleEnabled: false,
                maleEnabled: false,
                unisexEnable: false,
                femaleChecked: false,
                maleChecked: false,
                unisexChecked: false,
                familyNameChecked: false,
                givenNameChecked: true
            }
        }
    },
    methods: {
        onGivenNameChange() {
            this.formValues.femaleEnabled = true
            this.formValues.maleEnabled = true
            this.formValues.unisexEnable = true
            this.formValue.givenNameChecked = true
            this.formValue.familyNameChecked = false
        },
        onFamilyNameChange() {
            this.formValues.femaleEnable = false
            this.formValues.maleEnabled = false
            this.formValues.unisexEnable = false
            this.formValues.givenNameChecked = false
            this.formValue.familyNameChecked = true
        },
        onSkip: {
            //nameManagementDialog.close()
            //
            //alert("You want to skipt the name management form !!")
        },
        onProceed: {
            //alert("You want to proceed with the name management form !!")

            //let genderSelected = ""
            //let isGivenName = false
            //let isFamilyName = true 
            //if (document.getElementById("givenName").checked) {
            //      isGivenName = true
            //      isFamilyName = false
            //      if (document.getElementById("genderFemale").checked) {
            //          genderSelected = "Female"
            //      } else if (document.getElementById("genderMale").checked) {
            //      genderSelected = "Male"
            //      }
            //      else genderSelected = "Mixed"
            //     }
            //      let nameSelected = document.getElementById("name").value.toLowerCase()
            //      nameSelected = nameSelected.charAt(0).toUpperCase() + nameSelected.slice(1)
            //      namesBase.push({ 'name': nameSelected, 'sex': genderSelected, 'given': isGivenName, 'family': isFamilyName })     // Ajouter le prénom (ou le nom) dans la liste
            /*
            if ((isGivenName) && (!isFamilyName)) {
                return { 'sN': "UNK", 'gN': [nameSelected] }
            } else 
                return { 'sN':  nameSelected, 'gN': ["UNK"] }
            */
        }
    }
}
</script>
<style></style>