<template>
  <div class="contact">
      <div v-show='returned'>
          {{returned}}
      </div>
    <form id="contact-form" v-on:submit.prevent="submit">
        <div class="field">
            <input type="text" v-model="company" hidden>
        </div>
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
            token: '',
            company: '',
            returned: ''
        };
    },
    mounted() {
        this.token = document.querySelector('#_token').getAttribute('value')
        axios.defaults.headers.common['CSRF-TOKEN'] = this.token
    },
    methods: {
        submit(e) {
            if(this.company === '') {
                axios.post('/api/v1/contact', {
                        name:this.name,
                        email:this.email,
                        message:this.message
                    })
                    .then((response) => {
                        this.returned = response.data
                        this.name = ''
                        this.email = ''
                        this.message = ''
                    })
                    .catch((error) => {
                        this.returned = error
                        console.log(error)
                    })
            } else {
                this.returned = 'Failed'
            }
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
