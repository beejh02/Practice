<template>
    <div id="app">
        <header class="header">
        <div class="logo">
            <h1>Develop Me!</h1>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="#">투두 리스트</a></li>
                <li><a href="#">캘린더</a></li>
                <li><a href="#">커뮤니티</a></li>
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
        <div class="date_bar">
            <button @click="decreaseDate">전</button>
            <span class="date_text">{{ formattedDate }}</span>
            <button @click="increaseDate">후</button>
        </div>

        <!-- 새롭게 추가한 내용 -->
        <main class="content">
        <h2>여기에 내용을 추가하세요</h2>
        <p>이곳에 원하는 내용을 넣을 수 있습니다.</p>
        </main>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            일자: new Date() // 현재 날짜로 초기화
        };
    },
    computed: {
        formattedDate() {
            const year = this.일자.getFullYear();
            const month = (this.일자.getMonth() + 1).toString().padStart(2, '0');
            const day = this.일자.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    },
    methods: {
        increaseDate() {
            console.log(1)
            this.일자.setDate(this.일자.getDate() + 1);
        },
        decreaseDate() {
            this.일자.setDate(this.일자.getDate() - 1);
        }
    }
};
</script>

<style scoped src="./MyPage.css"></style>
