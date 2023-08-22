<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
  name: 'ProjectShow',
  data() {
    return {
      project: {}
    }
  },
  mounted() {

    const projectId = this.$route.params.id;

    axios.get(API_URL + '/project-show/' + projectId)
      .then(res => this.project = res.data.projects)
      .catch(err => console.error(err));
  }
}
</script>

<template>
  <main>
    <h1>Title: {{ project.title }}</h1>
    <p>Project leader: {{ project.project_leader }}</p>
    <p>Starting date: {{ project.starting_date }}</p>
    <p>Project type: {{ project.type.name }}</p>
  </main>
</template>

<style>
main {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>