<template>
  <section class="profile">
    <div class="profile_contacts">
      <a class="profile_link" v-bind:href="'mailto:' + profile.contacts.email">email me: {{ profile.contacts.email }}</a>
      <a class="profile_link" v-bind:href="'tel:' + profile.contacts.phone">call me: +{{ profile.contacts.phone }}</a>
    </div>
    <h1 class="profile_name">{{ profile.name }}</h1>
    <h2 class="profile_profession">{{ profile.profession }}</h2>
  </section>
</template>

<script>
import profile from '@/data/profile.js';

export default {
  data () {
    return {
      profile
    }
  }
}
</script>
