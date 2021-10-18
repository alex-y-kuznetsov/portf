<template>
  <div class="home container">
    <div class="projects">
      <Project
        v-for="project in projects"
        v-bind:key ="project.id"
        v-bind:id="project.id" />
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js';
import Project from '@/components/Project.vue';

export default {
  name: 'Home',
  components: {
    Project
  },
  data () {
    return {
      projects
    }
  }
}
</script>
