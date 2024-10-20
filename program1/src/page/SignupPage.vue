<template>
<div class="container">
        <!-- 사이트 로고 이미지 -->
        <div class="image-section">
            <img src="../assets/images/site-logo3.png" alt="이미지" />
        </div>


        <!-- 회원가입 & 로그인 섹션 -->
        <div class="divider"></div>
        <div class="form-section">
            <h1>회원 가입</h1>



            <!-- 회원가입 & 로그인 입력 받기 -->
            <form class = "signup-container">
                <div class="input-group">
                    <label for="usermail">이메일<br></label>
                    <input type="text" placeholder="Type here" id="usermail" name="usermail" required>
                </div>
                <div class="input-group">
                    <label for="password">비밀번호<br></label>
                    <input type="password" placeholder="**********" id="password" name="password" required>
                </div>
            </form>
            <form class = "resignup-container">
                <div class="input-group">
                    <label for="usermail">닉네임<br></label>
                    <input type="text" placeholder="Type here" id="usermail" name="usermail" required>
                </div>
                <div class="input-group">
                    <label for="password">비밀번호 확인<br></label>
                    <input type="password" placeholder="**********" id="password" name="password" required>
                </div>
            </form>
            <form class = "select-skills">
                <div class="input-group">
                    <label for="usermail">기술 스택<br></label>
                    <input type="text" placeholder="Type here" id="usermail" name="usermail" required>
                </div>
                <div class="input-group">
                    <label for="password">분야<br></label>
                    <input type="password" placeholder="**********" id="password" name="password" required>
                </div>
            </form>


            <div class="forget-and-login-button">
                <button class="button-gradient" type="submit">로그인</button>
            </div>

            <!-- Oauth 섹션 -->
            <div class="oauth">
                <img src="../assets/images/임시사용이미지.png" class = "oauth-image" alt="OAuth로 로그인" @click="loginWithOAuth" style="cursor: pointer;"/>
                <img src="../assets/images/임시사용이미지.png" class = "oauth-image" alt="OAuth로 로그인" @click="loginWithOAuth" style="cursor: pointer;"/>
                <img src="../assets/images/임시사용이미지.png" class = "oauth-image" alt="OAuth로 로그인" @click="loginWithOAuth" style="cursor: pointer;"/>
            </div>
        </div>
        
        
    </div>


</template>






<script setup>
</script>






<style src="./SignupPage.css"></style>
