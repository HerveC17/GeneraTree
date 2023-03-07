<script>
import GeneraTreeWelcome from './components/GeneraTreeWelcome.vue'
export default {
  name: "app",
  components: {
    GeneraTreeWelcome
  }
}
</script>

<template>
  <div id="app">
    <header>
      <h1 class="green"> GeneraTree: le générateur d'arbre généalogique</h1>
      <h3>par Hervé Caci - version 0.0.1 - Mars 2023</h3>
    </header>
    <GeneraTreeWelcome/>
  </div>
</template>

<style></style>