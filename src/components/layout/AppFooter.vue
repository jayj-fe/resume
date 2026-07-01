<template>
  <div class="app-footer">
    <h1>
      <button type="button" v-on:click="routerMoveEvent('ListPage')">Jay.J</button>
    </h1>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/jayj-fe" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" />
            https://github.com/jayj-fe
          </a>
        </li>
        <li>
          <a href="javascript:location.href = 'mailto:' + ['jayj.fe','gmail.com'].join('@')">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            jayj.fe@gmail.com
          </a>
        </li>
      </ul>
    </nav>
    <app-quick />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppQuick from './AppQuick.vue';

export default {
  name: 'AppFooter',
  components :{
    AppQuick
  },
  methods: {
    ...mapActions([ 'toggleHeader' ]),
    routerMoveEvent : function(_target){
      this.toggleHeader(false);
      
      if(this.$route.name !== _target){
        this.$router.push({ name: _target });
      }   
    }
  }
}
</script>

<style scoped>
</style>
