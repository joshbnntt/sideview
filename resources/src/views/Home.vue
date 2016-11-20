<template>
  <div>
    <div class="home-heading">
      <h1>Contact Me</h1>
    </div>
    <Contact> </Contact>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue';

export default {
    components: {
        Contact
    },
};
</script>

<style>
.logo {
  width: 450px;
  height: 173px
}
.home-heading: {
  display:flex;
  justify-content:center;
}
</style>
