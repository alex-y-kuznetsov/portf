<template>
  <div class="previews">
    <form v-on:change.prevent="updateShownProject">
      <ul>
        <li v-for="project in projects" v-bind:key="project.id">
          <input type="radio"
                v-bind:id="'preview_' + project.id"
                v-bind:value="project.id"
                v-model="shownProject">
          <label v-bind:for="'preview_' + project.id">{{ project.name }}</label>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import projects from '@/data/projects.js';

export default {
  data () {
    return {
      projects,
      shownProject: 1
    }
  },
  methods: {
    updateShownProject () {
      this.$store.commit('setShownProject', this.shownProject);
    }
  }
}
</script>
