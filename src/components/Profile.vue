<template>
  <section class="profile">
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
