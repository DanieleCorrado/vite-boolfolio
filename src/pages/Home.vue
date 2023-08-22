<script>

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
  name: 'Home',
  data: function () {
    return {
      projects: [],
      pages: []
    }
  },
  methods: {

    loadPage(target) {

      if (target == null) return;

      this.loadProjecs(target);
    },

    loadProjecs(target) {
      axios.get(target)
        .then(response => {

          const data = response.data;
          console.log(data);

          this.projects = data.projects.data;
          this.pages = data.projects.links;
        })
        .catch(error => {
          console.log(error);
        });
    },

  },
  mounted() {
    axios.get('http://localhost:8000/api/v1/project-index')
      .then(response => {

        const data = response.data;
        console.log(data);
        this.projects = data.projects.data;
        this.pages = data.projects.links;
      }).catch(error => {
        console.log(error);
      });
  },
}

</script>

<template>
  <main>
    <h1>Projects</h1>

    <ul class="list-unstyled">
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{
          name: 'project-show',
          params: { id: project.id }
        }">
          [{{ project.id }}] {{ project.title }}
        </router-link>

      </li>

    </ul>
    <div class="pages row justify-content-center cursor-pointer">
      <div v-for="(page, index) in pages" :key="index" class="page col" :class="(page.active ? 'bg-white text-dark' : 'bg-secondary')
        + ' '
        + (page.url == null ? 'd-none' : '')" v-html="page.label" role="button" @click="loadPage(page.url)" />

    </div>

  </main>
</template>

<style> main {
   text-align: center;
   margin-top: 20px;
 }

 h1 {
   margin-bottom: 20px;
 }

 .pages {
   margin-top: 20px;
 }
</style>