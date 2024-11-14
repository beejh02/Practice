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
        <div class= "contents">
            <h2 id = "modify_personal_info">정보수정</h2>
            <div class = "info_column">
                <div class = "my_info_box">
                    <a class = "personal_info_a">내 정보</a>
                    <div class="user_info">
                        <div class = "nickname_field">
                            <div class="form_group">
                                <label for="nickname">닉네임</label>
                                <p id="nickname">오리</p>
                            </div>
                            <div class="form_group">
                                <label for="field">분야</label>
                                <p id="field">백엔드 개발자</p>
                            </div>
                        </div>
                        
                        <div class="form_group">
                            <label for="tech">기술 스택</label>
                            <p id="tech">Java, Java Spring, MySQL, Mongo DB</p>
                        </div>
                    </div>
                </div>


                <div class = "my_info_box">
                    <form class="update-info">
                        <div class="form-group">
                            <label for="new-nickname">닉네임</label>
                            <input type="text" id="new-nickname" name="nickname" value="오리">
                        </div>
                        <div class="form-group">
                            <label for="new-field">분야</label>
                            <select id="new-field" name="field">
                                <option value="backend">백엔드 개발자</option>
                                <option value="frontend">프론트엔드 개발자</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="new-tech">기술 스택</label>
                            <textarea id="new-tech" name="tech" rows="4">Java, Java Spring, MySQL, Mongo DB</textarea>
                        </div>
                        <div class="form-group">
                            <label for="new-password">변경 비밀번호</label>
                            <input type="password" id="new-password" name="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">비밀번호 확인</label>
                            <input type="password" id="confirm-password" name="confirm-password">
                        </div>
                        <button type="submit">수정하기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            activeButton: null,
            activePostState: null
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
            const query = document.getElementById('search').value;
            console.log("검색어:", query);
        },
        toggleButton(buttonId) {
            if (this.activeButton === buttonId) {
                this.activeButton = null;
            } else {
                this.activeButton = buttonId;
            }

            const url = `/api/button-status?buttonId=${this.activeButton}`;

            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('서버 응답:', data);
            })
            .catch(error => {
                console.error('서버 요청 오류:', error);
            });
        },
        togglePostState(buttonIndex) {
            if (this.activePostState === buttonIndex) {
                this.activePostState = null;
            } else {
                this.activePostState = buttonIndex;
            }
        },
        writePost() {
            // API 요청
            fetch('/api/community/posts', {
                method: 'GET'
            })
            .then(response => {
                if (response.ok) {
                    // 페이지 전환
                    this.$router.push('/write-post'); // 글 작성 페이지로 이동
                } else {
                    alert('페이지로 전환하는데 문제가 발생했습니다.');
                }
            })
            .catch(error => {
                console.error('API 요청 오류:', error);
                alert('요청 중 오류가 발생했습니다.');
            });
        }
    }
};
</script>





<style scoped src="./MainTest.css"></style>