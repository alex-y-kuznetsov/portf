<template>
  <section class="profile">
    <h1 class="profile_name">{{ profile.name }}</h1>
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
