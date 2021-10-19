<template>
  <div class="home container">
    <Profile />
    <section class="projects">
      <Project
        v-for="project in projects"
        v-bind:key ="project.id"
        v-bind:id="project.id" />
    </section>
  </div>
</template>

<script>
import projects from '@/data/projects.js';
import Profile from '@/components/Profile.vue';
import Project from '@/components/Project.vue';

export default {
  name: 'Home',
  components: {
    Profile,
    Project
  },
  data () {
    return {
      projects
    }
  }
}
</script>
