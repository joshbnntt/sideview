<template>
  <div>
    <h1>Contact Me</h1>
    <Contact> </Contact>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue';
import Contact from '../components/Contact.vue';

export default {
    components: {
        Hello,
        Contact
    },
};
</script>

<style>
.logo {
  width: 450px;
  height: 173px
}
</style>
