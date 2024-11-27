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

    <div class="container">
        <aside v-if="isSidebarVisible" class= "ranking">
        <h2>랭킹</h2>
            <ul>
                <li>
                <img src= "../assets/images/임시사용이미지.png" class= "medal_image" />
                1. 사용자 A
                </li>
                <li>
                <img src= "../assets/images/임시사용이미지.png" class= "medal_image" />
                2. 사용자 B
                </li>
                <li>
                <img src= "../assets/images/임시사용이미지.png" class= "medal_image" />
                3. 사용자 C
                </li>

            </ul>
        </aside>
        <aside v-else class="menu">
            <h2>메뉴</h2>
            <ul>
                <li><a href="#">메뉴 1</a></li>
                <li><a href="#">메뉴 2</a></li>
                <li><a href="#">메뉴 3</a></li>
            </ul>
        </aside>

        <section class="content">
            <button @click="toggleSidebar">
            {{ isSidebarVisible ? '메뉴로 전환' : '랭킹으로 전환' }}
            </button>
            <h1>콘텐츠</h1>
            <img src = '../assets/images/임시사용이미지.png'>
        </section>
    </div>
</template>



<script>
export default {
    data() {
        return {
        isSidebarVisible: true,
        ranking: ['사용자 A', '사용자 B', '사용자 C'],
        };
    },
    methods: {
    }
};
</script>









<style scoped src="./MainTest.css"></style>