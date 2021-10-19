<template>
  <article class="project_item">
    <h1 class="project_title">{{ currentProject.name }}</h1>
    <h2 class="project_subtitle">{{ currentProject.subtitle }}</h2>
    <div class="project_img"
         v-bind:style="{ backgroundImage: 'url(' + constants.PROJ_PATH + currentProject.img + ')' }">
      <div class="project_links">
        <a class="project_link" target="_blank" v-bind:href="currentProject.prodUrl">Production</a>
        <a class="project_link" target="_blank" v-bind:href="currentProject.devUrl">Repository</a>
      </div>
    </div>
    <div class="project_description"></div>
  </article>
</template>

<script>
import constants from '@/data/constants.js';
import projects from '@/data/projects.js';

export default {
  name: 'Project',
  props: {
    id: {
      type: Number
    }
  },
  data () {
    return {
      constants
    }
  },
  computed: {
    currentProject () {
      return projects.find(project => project.id === this.id);
    }
  }
}
</script>
