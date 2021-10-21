<template>
  <div class="home container">
    <Profile />
    <section class="projects">
      <div class="projects_controls" v-if="!isProjectsBlockShown">
        <button class="btn projects_show_btn" v-on:click.prevent="toggleProjectsBlock">View Projects</button>
      </div>
      <transition name="fade">
        <div class="projects_shown" v-if="isProjectsBlockShown">
          <Previews />
          <Project v-bind:id="shownProject" />
        </div>
      </transition>
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
  methods: {
    toggleProjectsBlock () {
      this.$store.commit('toggleProjectsBlock');
    }
  },
  computed: {
    ...mapState([
      'shownProject',
      'isProjectsBlockShown'
    ])
  }
}
</script>
