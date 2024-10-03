<template>

  <div class = "black-bg" v-if="모달창 == 1">
    <div class = "white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click = "모달창 = 0">닫기</button>
    </div>
  </div>

  <div class = 'menu'>
    <a v-for = "a in 메뉴들" :key="a"> {{ a }} </a>
  </div>

  <div>
    <img :src="원룸들[0].image" class = "room-img">
    <h4> {{ 원룸들[0].title }}</h4>
    <p>{{ 원룸들[0].price }} 원</p>
  </div>

  <div id="app">
    <router-link to="/title">Go to Title Page</router-link>
    <!-- 라우트된 컴포넌트가 렌더링될 자리 -->
    <router-view></router-view> 
  </div>


</template>




<script>
import data from './assets/oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      원룸들 : data,
      모달창 : 0,
      신고수 : [0, 0, 0],
      메뉴들 : ["Home", "Shop", "About"],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },

  methods : {
    increase(i) {
      this.신고수[i] += 1;
    }
  },



  components: {
  }
}
</script>

<style>
body {
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}




.root-img {
  width : 100%;
  margin-top : 40px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}

.menu a {
  color : white;
  padding : 10px;
}

</style>
