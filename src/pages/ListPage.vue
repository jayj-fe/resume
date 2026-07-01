<template>
  <div class="app-con app-list-page">
    <app-list />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppList from '@/components/post/AppList';

export default {
  name: 'ListPage',
  props: {
      postCate: {
          type: String,
          default: "post",
      }
  },
  components :{
    AppList
  },
  methods: {
    ...mapActions([ 'fetchPostList' ]),
  },
  mounted() {
      this.$store.state.currentPosts = null;
      this.fetchPostList(this.postCate);
      
      window.scrollTo(0,0);
  },
}
</script>

<style scoped>
</style>
