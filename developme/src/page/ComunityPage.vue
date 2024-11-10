<template>
    <header>
        <div class = "maintitle">
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
        <div class = "myinfo">
            <button @click = logout_function class = "logout_button">로그아웃</button>
            <div class = "welcome_me">{{ 사용자명 }}님 환영합니다.</div>
        </div>
    </header>
    <div class ="container">
        <div class = "sidebar">
            <form id="sidebarsearch">
                <input type="text" id="search" placeholder="검색">
                <button type="button" @click="searchFunction()">검색</button>
            </form>
            <div class = "sidebar_menu">
                <span id = "sidebar_span">메뉴</span>
                <ul>
                    <li><button class = "sidebar_button" id = "full_recruitment_post">전체 모집글 보기</button></li>
                    <li><button class = "sidebar_button" id = "my_recruitment_post">내가 쓴 모집글</button></li>
                    <li><button class = "sidebar_button" id = "my_application_post">내가 지원한 모집글</button></li>
                </ul>
            </div>
        </div>


        <div class = "contents">

        </div>
    </div>
</template>




<script>
export default {
    methods: {
        logout_function() {
        fetch('/api/users/logout', { method: 'POST' })
            .then(response => {
            if (response.ok) {
                this.$router.push('/logout');
            } else {
                alert('로그아웃에 실패했습니다.');
            }
            })
            .catch(error => {
            console.error('로그아웃 오류:', error);
            alert('로그아웃 중 오류가 발생했습니다.');
            });
        },
        searchFunction() {
        const query = document.getElementById('searchInput').value;
        console.log("검색어:", query);
        }
    }
};
</script>




<style scoped src="./ComunityPage.css"></style>