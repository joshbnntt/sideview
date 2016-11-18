<template>
  <div class="contact">
      <div v-show='returned'>
          {{returned}}
      </div>
    <el-form ref="form" :rules="rules" :model="form"  label-width="120px">
        <el-form-item>
            <el-input type="text" v-model="form.company" hidden></el-input>
        </el-form-item>    
        <el-form-item label="Name" prop="name">
            <el-input type="text" v-model="form.name" required minlength="3"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input type="email" v-model="form.email" required></el-input>
        </el-form-item>
        <el-form-item label="Message" prop="message">
            <el-input type="textarea" v-model="form.message" required></el-input>
        </el-form-item>
        <el-form-item >
            <el-button type="primary">Submit</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            company: '',
            returned: '',
            form: {
                name: '',
                email: '',
                message: '',
                token: ''   
            },
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
            if(this.form.company === '') {
                this.$refs.Form.validate((valid) => {
                    if (valid) {
                        axios.post('/api/v1/contact', {
                                name:this.form.name,
                                email:this.form.email,
                                message:this.form.message
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
