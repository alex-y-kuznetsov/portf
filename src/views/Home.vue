<template>
  <div class="home container">
    <Profile />
    <section class="projects">
      <Previews />
      <Project v-bind:id="shownProject" />
    </section>
    <section class="additional">
      <a href="#" class="download_resume">download my resume</a>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import projects from '@/data/projects.js';
import Profile from '@/components/Profile.vue';
import Previews from '@/components/Previews.vue';
import Project from '@/components/Project.vue';

export default {
  name: 'Home',
  components: {
    Profile,
    Previews,
    Project
  },
  data () {
    return {
      projects
    }
  },
  computed: {
    ...mapState([
      'shownProject'
    ])
  }
}
</script>
