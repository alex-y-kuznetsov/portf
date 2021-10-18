<template>
  <div class="home container">
    <div class="projects">
      <article class="project_item"
               v-for="project in projects"
               v-bind:key ="project.id">
        <h1 class="project_title">{{ project.name }}</h1>
        <h2 class="project_subtitle">{{ project.subtitle }}</h2>
        <div class="project_img"></div>
        <div class="project_description"></div>
      </article>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      projects
    }
  }
}
</script>
