<template>
  <article class="project_item">
    <h1 class="project_title">{{ currentProject.name }}</h1>
    <h2 class="project_subtitle">{{ currentProject.subtitle }}</h2>
    <div class="project_img"></div>
    <div class="project_description"></div>
  </article>
</template>

<script>
import projects from '@/data/projects.js';

export default {
  props: {
    id: {
      type: Number
    }
  },
  data () {
    return {
      projectId: this.id
    }
  },
  computed: {
    currentProject () {
      return projects.find(project => project.id === this.projectId);
    }
  }
}
</script>
