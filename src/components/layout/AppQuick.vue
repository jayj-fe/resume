<template>
  <div class="app-quick">
    <button type="button" v-on:click="historyBackFn()"><font-awesome-icon icon="fa-solid fa-arrow-left-long" /></button>
    <button type="button" v-on:click="pageScrollTopMoveFn()"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
  </div>
</template>

<script>
export default {
  name: 'AppQuick',
  methods: {
    historyBackFn : function(){
        this.$router.go(-1);
    },
    pageScrollTopMoveFn : function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  },
}
</script>
<style scoped>
</style>
