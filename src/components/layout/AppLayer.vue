<template>
  <div class="app-layer">
    <div class="app-layer__bg" @click="layerClose();">&nbsp;</div>
    <div class="app-layer__con">
      <strong>Vue.js로 만든 블로그입니다.</strong>

      <p>
        <b>node.js</b>를 이용하여 포스팅되어 있는 파일들을 json파일로 변환하고, 임의의 <a href="https://github.com/jayj-fe/blogAPI" target="_blank">blogAPI</a>란 사이트에 출력하고<br>
        <br>
        본 블로그에서 <b>Vue.js</b>를 이용하여 개발하고 <b>axios</b>를 이용하여 데이터를 통신, 출력하였습니다.
      </p>

      <div class="app-layer__btn-area">
        <button type="button" @click="today_layerClose();">오늘 하루 닫기</button>
        <button type="button" @click="layerClose();">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayer',
  methods: {
    layerClose : function(){
      // console.log('layerClose');
      document.querySelector('.app-layer').remove();
    },

    today_layerClose : function(){
      // console.log('today_layerClose');
      document.querySelector('.app-layer').remove();
      this.setStorage("today", 1);
    },

    setStorage: function (name, exp) {
      var date = new Date();
      date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

      localStorage.setItem(name, date)
    },
    
    getStorage: function (name) {
      var now = new Date();
      now = now.setTime(now.getTime());
      return parseInt(localStorage.getItem(name)) > now
    }
  },

  mounted() {
    if (this.getStorage("today")) {
      document.querySelector('.app-layer').remove();
    }else{
      document.querySelector('.app-layer').classList.add("show");
    }
  }
}
</script>
<style scoped>
</style>
