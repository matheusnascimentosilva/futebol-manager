<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import type { Team } from '../../shared-types/src/index.js'
import { ref } from 'vue'

// Exemplo de uso dos tipos compartilhados
const teams = ref<Team[]>([])

// Exemplo de time
const exampleTeam: Team = {
  id: '1',
  name: 'Futebol Manager FC',
  city: 'São Paulo',
  stadium: 'Arena Exemplo',
  series: 'A',
  tactics: {
    formation: '4-3-3',
    mentality: 'Attacking'
  },
  players: [],
  coach: 'Técnico Vue',
  budget: 100,
  primaryColor: '#42b883',
  secondaryColor: '#35495e'
}

teams.value.push(exampleTeam)
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
