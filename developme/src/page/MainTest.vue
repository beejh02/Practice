<template>
    <header>
        <div class="maintitle">
            <h1>Develop Me!</h1>
        </div>
        <nav>
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
            <button @click="logout_function" class="logout_button">로그아웃</button>
            <div class="welcome_me"><!--{{ users.nickname }}-->님 환영합니다.</div>
        </div>
    </header>

    
    <div id = "content">
        하이?
    </div>
</template>




<script>
export default {
    data() {
        return {
            selectedMenu: null // 선택된 메뉴 항목의 인덱스를 저장
        };
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index; // 선택된 메뉴의 인덱스를 설정
        }
    }
};
</script>





<style scoped src="./MainTest.css"></style>