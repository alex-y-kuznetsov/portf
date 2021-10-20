<template>
  <article class="project_item">
    <h1 class="project_title">{{ currentProject.name }}</h1>
    <h2 class="project_subtitle">{{ currentProject.subtitle }}</h2>
    <div class="project_img_container">
      <img class="project_img"
           v-for="(projectImage, index) in currentProject.images"
           v-bind:key="index"
           v-bind:src="projectImage" />
    </div>
    <div class="project_description">
      <span class="project_description_subline">Features:</span>
      <ul class="project_features">
        <li class="project_features_item"
            v-for="(projectFeature, index) in currentProject.features"
            v-bind:key="index">{{ projectFeature }}</li>
      </ul>
    </div>
    <div class="project_links">
      <a class="project_link" target="_blank" v-bind:href="currentProject.prodUrl">Production</a>
      <a class="project_link" target="_blank" v-bind:href="currentProject.devUrl">Repository</a>
    </div>
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
