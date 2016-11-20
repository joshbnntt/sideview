<template>
  <div class="container">
      <div v-show='returned'>
          <span class="error">{{returned}}</span>
      </div>
    <form ref="form" @submit.stop.prevent="submit"  label-width="120px">
        <div class='row'>
            <input type="text" v-model="company" hidden></input>
        </div>    
        <div class='row'>
            <label for="contact-name">
                Name
                <input name='contact-name' id='contact-name' type="text" v-model="name" required minlength="3"></input>
            </label>
        </div>
        <div class='row'>
            <label for="contact-email">
                Email
                <input name='contact-email' id='contact-email' type="email" v-model="email" required></input>
            </label>
        </div>
        <div class='row'>
            <label for="contact-message">
                Message
                <textarea name='contact-message' id='contact-message' class="materialize-textarea" v-model="message" required></textarea>
            </label>
        </div>
        <div class='row'>
            <button class="btn" type="primary">Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    component: {
    },
    data() {
        return {
            company: '',
            returned: '',
            name: '',
            email: '',
            message: '',
            token: ''            
        }
    },
    mounted() {
        this.token = document.querySelector('#_token').getAttribute('value')
        axios.defaults.headers.common['CSRF-TOKEN'] = this.token
    },
    methods: {
        handleReset() {
            this.name = ''
            this.email = ''
            this.message = ''
        },
        submit(e) {
            if(this.company === '') {
                axios.post('/api/v1/contact', {
                        name:this.name,
                        email:this.email,
                        message:this.message
                    })
                    .then((response) => {
                        this.returned = response.data
                        this.handleReset()
                    })
                    .catch((error) => {
                        this.returned = error
                        console.log(error)
                    })
            } else {
                this.returned = 'Failed'
                return false;
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
.contact {
    display:flex;
    justify-content:center;
    width:100vw;
}
</style>
