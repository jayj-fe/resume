<template>
  <div class="app">
    <router-view name="layer"/>
    <router-view name="header"/>
    <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" :key="$route.fullPath" />
        </transition> 
    </router-view>
		<router-view name="footer"/>  
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
      return {
          width: 0
      }
  },
  methods: {
    ...mapActions([ 'toggleHeader' ]),
    handleResize() {
        this.width = window.innerWidth;

        if( this.width >= 1024){
          this.toggleHeader(true);
        }else{
          this.toggleHeader(false);
        }
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
}
</script>

<style>
</style>
