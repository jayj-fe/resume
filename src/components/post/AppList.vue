<template>
  <div class="app-list">
    <ul class="app-list__container">
      <transition-group name="fade">
      <li v-for="postItem in currentPosts" v-bind:key="postItem" class="list-item">
        <router-link class="list-item__thumnail" :to="{name: 'ViewPage', params: { postTit : postItem.title, postDate : postItem.date, postURL : postItem.url }}">
          <img v-bind:src=postItem.img alt="">
        </router-link>
        <span v-for="categoriesItem in postItem.categories" v-bind:key="categoriesItem" class="list-item__categorie">
          {{ categoriesItem }}
        </span>
        <router-link class="list-item__title" :to="{name: 'ViewPage', params: { postTit : postItem.title, postDate : postItem.date, postURL : postItem.url }}">
          {{ postItem.title }}
        </router-link>
        <p class="list-item__date">{{ postItem.date }}</p>
        <p class="list-item__con">{{ postItem.con }}</p>
      </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import "@/assets/scss/list.scss";

export default {
  name: 'AppList',
	computed: {
		...mapState([ 'currentPosts' ]),
	}
}
</script>
<style scoped>
</style>
