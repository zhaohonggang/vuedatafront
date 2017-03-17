<template>

  <div id="main">
  
    <component v-on:loginSuccess="watchlogin" v-bind:is="currentView"></component>
    
  </div>

</template>

<script>
import Login from './login.vue'
import About from './about.vue'

export default {
  data () {
    return {
      request_user:'',
      msg: '',
      currentView: 'admin-page',
    }
  },
  mounted(){
     this.requestUser();
     document.title = 'Manage'
  },
  methods:{
    requestUser:function() {
      axios.get('http://api.grocercapital.com/api/request_user/', {
        headers:{ 
          Authorization: 'Token ' + Cookies.get('token')
        }
      }).then(response => {
        this.request_user = response.body.user;
        this.watchlogin()
      }).catch( response => {
        this.currentView = 'login-page'
      })
    },
    watchlogin:function() {
      this.currentView = 'admin-page';
      this.$emit('watchlogin')
    }
  },
  components: {
    'login-page': Login,
    'admin-page': About,
  }
}
</script>

<style src="../../static/css/manage.css"></style>
