<template>
  <div class="previews">
    <form v-on:change.prevent="updateShownProject">
      <ul class="previews_list">
        <li class="previews_list_item"
            v-for="project in projects" v-bind:key="project.id">
          <input type="radio"
                 class="preview_radio"
                 v-bind:id="'preview_' + project.id"
                 v-bind:value="project.id"
                 v-model="shownProject">
          <label class="preview_label"
                 v-bind:for="'preview_' + project.id">{{ project.name }}</label>
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
