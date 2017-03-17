<template>
    <div id="app" :style="appSlide">
    
        <menu-comp v-if="menuShow" v-on:menuon="push" v-on:menuoff="pull"></menu-comp>

        <transition name="content-fade">
            <router-view v-on:showmenus="menuShowOn"></router-view>
            <router-view v-on:watchlogin="menuShowOff" name="manage"></router-view>
        </transition>
    	
    </div>
</template>

<script>
import Menu from '@/components/menu-comp.vue'

export default {
  name: 'app',
   data() {
       return {
    appSlide: '',
    menuShow: true
       }
  },
  components: {
    'menu-comp': Menu,
  },
  methods:{
    push:function() {
        this.appSlide = 'padding-left:150px'
    },
    pull:function() {
        this.appSlide = ''
    },
    menuShowOff:function() {
      this.menuShow = false;
    },
    menuShowOn:function() {
      this.menuShow = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
