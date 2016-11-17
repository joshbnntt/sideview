<template>
  <div>
    <h1>Dashboard Page</h1>
    <p>
        {{ msg }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          msg:''
      }
  },

  mounted () {
    //setInterval(this.getTime, 1000);
  },
  methods: {
      getTime() {
          axios.get('/api/v1/time')
            .then(({data}) => {
                this.msg = data
            })
            .catch((error) => {
                console.log(error)
            })
      }
  }
};
</script>

<style>
.logo {
  width: 450px;
  height: 173px
}
</style>
