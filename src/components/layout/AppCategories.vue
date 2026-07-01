<template>
  <div class="app-categories">
    <h3><span>Categories</span></h3>
    <ul>
      <li v-for="item in categoriesList" v-bind:key="item">
        <button type="button" v-on:click="routerMoveEvent(item.name)"># {{item.name}} <span>({{item.length}})</span></button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'AppCategories',
	computed: {
		...mapState([ 'categoriesList' ]),
	},
  methods: {
    ...mapActions(['fetchCategoriesList', 'fetchPostList', 'toggleHeader']),
    routerMoveEvent : function(i){
      if( window.innerWidth <= 1024){
        this.toggleHeader(false);
      }
    
      this.$router.push({ name: 'ListPage', params: { postCate: i } });
    }
  },
  mounted(){
    this.fetchCategoriesList();
  }
}
</script>

<style scoped>
</style>
