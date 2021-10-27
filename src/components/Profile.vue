<template>
  <section class="profile">
    <div class="profile_contacts">
      <a class="profile_link" v-bind:href="'mailto:' + profile.contacts.email">
        <span class="profile_link_additional">email me: </span>
        {{ profile.contacts.email }}
      </a>
      <a class="profile_link" v-bind:href="constants.PROJ_PATH + '/files/resume-alexander-kuznetsov.pdf'" download>
        <span class="profile_link_additional">download my </span>
        resume
      </a>
    </div>
    <h1 class="profile_name">{{ profile.name }}</h1>
    <h2 class="profile_profession">{{ profile.profession }}</h2>
    <p class="profile_description">{{ profile.description }}</p>
  </section>
</template>

<script>
import constants from '@/data/constants.js';
import profile from '@/data/profile.js';

export default {
  data () {
    return {
      constants,
      profile
    }
  }
}
</script>
