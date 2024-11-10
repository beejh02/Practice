<template>
    <header class = "header">
        <a class = "svg">DevelopMe</a>
        <nav class="nav">
            <ul>
                <li><a href="#">투두 리스트</a></li>
                <li><a href="#">캘린더</a></li>
                <li><a href="comunitypage">커뮤니티</a></li>
                <li><a href="#">로드맵</a></li>
                <li><a href="#">알고리즘</a></li>
                <li><a href="mypage">마이페이지</a></li>
            </ul>
        </nav>
        <div class="myinfo">
            <button class="logout_button">로그아웃</button>
            <div class="welcome_me">{{ 사용자명 }}님 환영합니다.</div>
        </div>
    </header>
    <div class = "content">
        <a class = "svg"> 안녕?</a>
    </div>

</template>






<script setup>

</script>


<style scoped src="./ComunityPage.css"></style>