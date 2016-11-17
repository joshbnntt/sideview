<template>
  <div class="contact">
    <form id="contact-form" v-on:submit.prevent="submit">
        <div class="field">
            <label>Name:</label>
            <input type="text" v-model="name" required minlength="3">
        </div>
        <div class="field">
            <label>Email:</label>
            <input type="email" v-model="email" required>
        </div>
        <div class="field">
            <label>Message:</label>
            <input type="text" v-model="message" required>
        </div>
        <div class="field">
            <button type="submit">Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },

  methods: {
      submit(e) {
            axios.post('/api/v1/contact', {
                    name:this.name,
                    email:this.email,
                    message:this.message,
                    _csrf:document.querySelector('input[name=_crsf]').value
                })
                .then((response) => {
                    console.log(response)
                    this.name = ''
                    this.email = ''
                    this.message = ''
                })
                .catch((error) => {
                    console.log(error)
                })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
