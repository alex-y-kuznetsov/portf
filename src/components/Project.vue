<template>
  <transition name="fade">
    <article class="project_item" v-if="!isAnimatingProject">
      <h1 class="project_title">{{ currentProject.name }}</h1>
      <h2 class="project_subtitle">{{ currentProject.subtitle }}</h2>
      <div class="project_img_container">
        <div class="project_img_cover"
            v-for="(projectImage, index) in currentProject.images"
            v-bind:key="index">
          <img class="project_img" v-bind:src="projectImage.url" />
          <div class="project_img_description">
            <span>{{ projectImage.description }}</span>
          </div>
        </div>
      </div>
      <div class="project_description">
        <span class="project_subline">Features:</span>
        <ul class="project_features">
          <li class="project_features_item"
              v-for="(projectFeature, index) in currentProject.features"
              v-bind:key="index">{{ projectFeature }}</li>
        </ul>
      </div>
      <span class="project_subline">Links:</span>
      <div class="project_links">
        <a class="btn project_link" target="_blank" v-bind:href="currentProject.prodUrl">Production</a>
        <a class="btn project_link" target="_blank" v-bind:href="currentProject.devUrl">Repository</a>
      </div>
    </article>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
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
    ...mapState([
      'isAnimatingProject'
    ]),
    currentProject () {
      return projects.find(project => project.id === this.id);
    }
  }
}
</script>
