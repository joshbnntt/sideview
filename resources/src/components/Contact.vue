<template>
  <div class="contact">
      <div v-show='returned'>
          <span class="md-error">{{returned}}</span>
      </div>
    <form ref="form" @submit.stop.prevent="submit"  label-width="120px">
        <md-input-container>
            <md-input type="text" v-model="company" hidden></md-input>
        </md-input-container>    
        <md-input-container label="Name">
            <md-input type="text" v-model="name" required minlength="3"></md-input>
        </md-input-container>
        <md-input-container label="Email" >
            <md-input type="email" v-model="email" required></md-input>
        </md-input-container>
        <md-input-container label="Message">
            <md-textarea v-model="message" required></md-textarea>
        </md-input-container>
        <md-input-container >
            <md-button type="primary">Submit</md-button>
        </md-input-container>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            company: '',
            returned: '',
            name: '',
            email: '',
            message: '',
            token: '',
            rules: {
                name: [
                    { required: true, message: 'Please give your name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Please give your email', trigger: 'blur' },
                ]
            }
            
        }
    },
    mounted() {
        this.token = document.querySelector('#_token').getAttribute('value')
        axios.defaults.headers.common['CSRF-TOKEN'] = this.token
    },
    methods: {
        handleReset() {
            this.$refs.Form.resetFields()
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
</style>
