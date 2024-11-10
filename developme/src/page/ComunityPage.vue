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
                    <li>
                        <button class="sidebar_button" :class="{ active: activeButton === 'full_recruitment_post' }" @click="toggleButton('full_recruitment_post')" id="full_recruitment_post">
                        전체 모집글 보기
                        </button>
                    </li>
                    <li>
                        <button class="sidebar_button" :class="{ active: activeButton === 'my_recruitment_post' }" @click="toggleButton('my_recruitment_post')" id="my_recruitment_post">
                        내가 쓴 모집글
                        </button>
                    </li>
                    <li>
                        <button class="sidebar_button" :class="{ active: activeButton === 'my_application_post' }" @click="toggleButton('my_application_post')" id="my_application_post">
                        내가 지원한 모집글
                        </button>
                    </li>
                </ul>
            </div>
        </div>


        <div class = "contents">
            <button class = "post_state">New</button>
            <button class = "post_state">Top</button>
            <button class = "post_state">Hot</button>
            <button class = "post_state">Closed</button>

        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            activeButton: null
        };
    },
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
        },
        toggleButton(buttonId) {
            // 버튼 상태를 토글
            if (this.activeButton === buttonId) {
                this.activeButton = null;
            } else {
                this.activeButton = buttonId;
            }

            // 서버에 버튼 상태를 전송
            fetch('/api/button-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ buttonId: this.activeButton })
            })
            .then(response => response.json())
            .then(data => {
                console.log('서버 응답:', data);
            })
            .catch(error => {
                console.error('서버 요청 오류:', error);
            });
        }
    }
};
</script>





<style scoped src="./ComunityPage.css"></style>