<template>
  <div class="app-header">
    <button type="button" class="app-header__mobile-btn" v-on:click="toggleHeader(!isActiveHeader)"><font-awesome-icon icon="fa-solid fa-bars" /></button>
    <button type="button" class="app-header__mobile-menu__bg" v-on:click="toggleHeader(false)" v-if="isActiveHeader">&nbsp;</button>
    <transition name="slide-fade">
      <aside v-if="isActiveHeader">
        <h1>
          <button type="button" v-on:click="routerMoveEvent('ListPage')">Jay.J</button>
        </h1>
        <nav>
          <ul class="app-header__gnb">
            <li><button type="button" v-on:click="routerMoveEvent('ListPage')">HOME</button></li>
            <li><button type="button" v-on:click="routerMoveEvent('ArchivePage')">ARCHIVE</button></li>
            <li><button type="button" v-on:click="routerMoveEvent('AboutPage')">ABOUT</button></li>
          </ul>
          <app-categories />
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppCategories from '@/components/layout/AppCategories';

export default {
  name: 'AppHeader',
  components: {
    AppCategories
  },
	computed: {
		...mapState([ 'isActiveHeader' ]),
	},
  methods: {
    ...mapActions([ 'fetchPostList', 'toggleHeader' ]),
    routerMoveEvent : function(_target){
      if( window.innerWidth <= 1024){
        this.toggleHeader(false);
      }

      if(_target === 'ListPage'){
        this.$router.push({ name: _target, params: { postCate: 'post' } });
      }else{
        if(this.$route.name !== _target){
          this.$store.state.currentPosts = null;
          this.$router.push({ name: _target });
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
