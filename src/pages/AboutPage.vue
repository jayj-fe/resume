<template>
  <section class="app-con app-about-page">
    <h2>Career</h2>

    <article class="career">
      <article class="company">
        <h3>한국일보사.</h3>
        <p><span>Front End Developer</span>2023. 07 ~ 현재</p>
      </article>

      <article class="career-info">
        <h4>담당업무</h4>
        <ul class="career-info__list">
          <li>Javascript와 SCSS를 이용하여 한국일보 사이트 유지운영</li>
          <li>React.js와 Mui를 이용한 한국일보CMS 유지운영</li>
          <li>Javascript, Astro.js React.js, Three.js 등을 이용한 Interactive 페이지 개발</li>
        </ul>
      </article>
      
      <article class="career-info">
        <h4>
          <button type="button" v-on:click="careerToggleHankookilbo">
            주요 프로젝트
            <font-awesome-icon v-if="careerShowHankookilbo" icon="fa-solid fa-angle-up" />
            <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
          </button>
        </h4>
        <ul class="career-info__list project" v-if="careerShowHankookilbo">
          <li><a href="https://interactive.hankookilbo.com/v/sf_novel_puberty/" target="_blank">[인터렉티브] SF소설 - 서아의 사춘기<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://interactive.hankookilbo.com/v/sewol/" target="_blank">[인터렉티브] 세월호 참사 10주기, 그날의 책임자들... 저울은 공정했을까.<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.hankookilbo.com/election2024" target="_blank">[특별페이지] 제22대 국회의원 총선거<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://interactive.hankookilbo.com/v/inheritance/" target="_blank">[인터렉티브] 상속게임, 쩐의 전쟁<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://interactive.hankookilbo.com/v/dementia/chapter2.html" target="_blank">[인터렉티브] 미씽, 당신이 치매에 걸린다면...<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://interactive.hankookilbo.com/v/dementia/" target="_blank">[인터렉티브] 미씽, 사라진 엄마를 찾습니다.<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li>한국일보 CMS 유지운영</li>
          <li><a href="https://www.hankookilbo.com/" target="_blank">한국일보 사이트 유지운영<font-awesome-icon icon="fa-solid fa-link" /></a></li>
        </ul>
      </article>
    </article>

    <article class="career">
      <article class="company">
        <h3>위트플러스.</h3>
        <p><span>UI Developer</span>2017. 02 ~ 2023. 06</p>
      </article>

      <article class="career-info">
        <h4>담당업무</h4>
        <ul class="career-info__list">
          <li>Vue.js와 Sass를 이용하여 웹사이트와 하이브리드앱 구축</li>
          <li>VanillaJS와 Sass를 이용하여 웹 사이트 구축</li>
          <li>RequireJS를 이용하여 웹 사이트 구축</li>
          <li>Jquery와 CSS를 이용하여 웹 사이트 구축</li>
        </ul>
      </article>
      
      <article class="career-info">
        <h4>
          <button type="button" v-on:click="careerToggleWitplus">
            주요 프로젝트
            <font-awesome-icon v-if="careerShowWitplus" icon="fa-solid fa-angle-up" />
            <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
          </button>
        </h4>
        <ul class="career-info__list project" v-if="careerShowWitplus">
          <li><a href="https://www.winenara.com/shop/main" target="_blank">와인나라 웹, 모바일 사이트 및 앱 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <!-- <li><a href="" target="_blank">마장동 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li> -->
          <li><a href="https://www.biteme.co.kr/" target="_blank">바잇미 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.amante.co.kr/shop/main?v=1&gclid=CjwKCAjwzeqVBhAoEiwAOrEmzXEey8HE3zA7CGV8oXllSDrxNRN1K1X2re1gYthgwtzplvWtc34dCRoCpQAQAvD_BwE" target="_blank">아망떼 모바일 사이트 및 앱 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://eshop.lottehotel.com/eshop/main" target="_blank">호텔롯데 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.daisomall.co.kr/shop/search.php?page=1&max=30&search_text=%EC%BB%B4%ED%93%A8%ED%84%B0%EC%B1%85%EC%83%81&orderby=daiso_ranking2&cid=022003004000000&depth=3&list_type=icon" target="_blank">다이소몰 유지보수<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.spyder.co.kr/main/main?utm_source=google&utm_medium=keywordSA&utm_campaign=GGKWmain&utm_term=%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94&gclid=CjwKCAjwzeqVBhAoEiwAOrEmzeLsk-YAGDLpKlOnfP_pwiyoZla0e_Qoy9PPJdGnz0-yqxuf7NPljhoCdiIQAvD_BwE" target="_blank">스파이더 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.iboda.net/main/main.php" target="_blank">아이보다 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.greenfriends.co.kr/main/main.php" target="_blank">녹색친구들 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.joessandwich.com/main/main.php" target="_blank">죠스샌드위치 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="" target="_blank">아이세라믹 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li>디탱크 웹, 모바일 사이트 구축</li>
          <li><a href="https://www.gongbubob.com/main/main.asp" target="_blank">공부밥 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="http://www.witplus.com/" target="_blank">위트플러스 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://store.enter6.co.kr/" target="_blank">엔터식스 유지보수<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.pylsc.co.kr/homepage/main/main.php" target="_blank">파주연천축협 쇼핑몰 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="" target="_blank">gldn 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.insanga.co.kr/main/index.asp" target="_blank">인산가 유지보수<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li>세러데이모닝 웹, 모바일 사이트 구축</li>
          <li><a href="https://www.dermatory.com/ko/main/index.asp" target="_blank">더마토리 웹, 모바일 사이트 구축<font-awesome-icon icon="fa-solid fa-link" /></a></li>
          <li><a href="https://www.clubclio.co.kr/main/main_real.asp" target="_blank">클럽클리오 사이트 구축 및 유지보수<font-awesome-icon icon="fa-solid fa-link" /></a></li>
        </ul>
        <!-- 우주부품연구포털 -->
      </article>
    </article>

    <article class="career">
      <article class="company">
        <h3>시도우.</h3>
        <p><span>UI Developer</span>2015. 11 ~ 2016. 11</p>
      </article>
      
      <article class="career-info">
        <h4>담당업무</h4>
        <ul class="career-info__list">
          <li>웹 접근성 QA 진단</li>
          <li>구축 사이트 웹 접근성 인증마크 획득</li>
          <li>CSS와 Jquery를 이용하여 웹 사이트 구축</li>
        </ul>
      </article>
      
      <article class="career-info">
        <h4>
          <button type="button" v-on:click="careerToggleCidow">
            주요 프로젝트
            <font-awesome-icon v-if="careerShowCidow" icon="fa-solid fa-angle-up" />
            <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
          </button>
        </h4>
        <ul class="career-info__list project" v-if="careerShowCidow">
          <li>삼성전자 QA 진단</li>
          <li>중외그룹 사 웹, 모바일 사이트 유지운영</li>
          <li>DMZ 반응형 사이트 구축</li>
          <li>딘타이펑 유지운영</li>
          <li>KFA 대한축구협회 유지운영</li>
          <li>국방기술품질원 웹 사이트 구축 구축(웹 접근성 마크 획득)</li>
          <li>씨티카 웹, 모바일 사이트</li>
        </ul>
        <!-- 우주부품연구포털 -->
      </article>
    </article>
  </section>
</template>

<script>
import "@/assets/scss/about.scss";

export default {
  name: 'AboutPage',
  data() {
    return {
      careerShowHankookilbo : false,
      careerShowWitplus : false,
      careerShowCidow : false
    }
  },
  methods: {
    careerToggleHankookilbo : function(){
      this.careerShowHankookilbo = !this.careerShowHankookilbo
    },
    careerToggleWitplus : function(){
      this.careerShowWitplus = !this.careerShowWitplus
    },
    careerToggleCidow : function(){
      this.careerShowCidow = !this.careerShowCidow
    }
  },
}
</script>

<style scoped>
</style>
