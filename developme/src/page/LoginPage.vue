<template>
    <div class="home">
    <!-- 사이트 로고 이미지 -->
    <div class="image-section">
        <img src="../assets/images/site-logo3.png" alt="이미지" />
    </div>

    <!-- 회원가입 & 로그인 섹션 -->
    <div class="divider"></div>
        <div class="form-section">
            <h1>회원 가입</h1>

            <!-- OAuth 섹션 -->
            <div class="oauth">
                <button id="google_oauth_login" class="oauth_button" @click="loginWithOAuth">
                    <img src="../assets/images/임시사용이미지.png" class="oauth-image" alt="Google OAuth로 로그인" />
                </button>
                <button id="kakao_oauth_login" class="oauth_button" @click="loginWithOAuth">
                    <img src="../assets/images/임시사용이미지.png" class="oauth-image" alt="Kakao OAuth로 로그인" />
                </button>
                <button id="github_oauth_login" class="oauth_button" @click="loginWithOAuth">
                    <img src="../assets/images/임시사용이미지.png" class="oauth-image" alt="GitHub OAuth로 로그인" />
                </button>
            </div>

            <span id="noti_login">또는 이메일과 비밀번호로 로그인</span>

            <!-- 회원가입 폼 -->
            <form class="signup-form">
                <div class="form-row">
                    <div class="input-group">
                        <label for="usermail">이메일</label>
                        <input type="text" id="usermail" name="usermail" placeholder="Type here" required />
                    </div>
                    <div class="input-group">
                        <label for="password">비밀번호</label>
                        <input type="password" id="password" name="password" placeholder="**********" required />
                    </div>
                </div>
    
                <div class="submit-button">
                    <button class="button-gradient" type="submit">제출</button>
                </div>
            </form>
        </div>
    </div>
</template>
    
    <script>
    export default {
        data() {
        return {
            isDropdownOpen: false,
            selectedItem: '선택하세요',
        };
        },
        methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectItem(item) {
            this.selectedItem = item;
            this.isDropdownOpen = false;
        },
        loginWithOAuth() {
            // OAuth 로그인 기능 구현
        }
        },
    };
    </script>
    
    






<style scoped src="./LoginPage.css"></style>
