<template>
    <div class = "page">
        <div class = "cover_image"><img id = "site_logo" src="../assets/images/site-logo3.png" alt="이미지" /></div>
        <div class = "divider"></div>
        <div class = "section">
            <div id = "display_signup"><span class = "span_basis">계정이 없어요! <button id = "signup_button">회원가입!</button></span></div>
            <h1 id = "display_main_message">로그인하기</h1>
            <div class = "oauth_section">
                <button id = "oauth_google_login">
                    <img src="../assets/images/임시사용이미지.png" alt="Google OAuth로 로그인" />
                </button>
                <button id = "oauth_google_login">
                    <img src="../assets/images/임시사용이미지.png" alt="Google OAuth로 로그인" />
                </button>
                <button id = "oauth_google_login">
                    <img src="../assets/images/임시사용이미지.png" alt="Google OAuth로 로그인" />
                </button>
            </div>
            <span class = "span_basis">또는 이메일과 비밀번호로 로그인</span>

            <form id="login_basis_form">
                <div id = "input_box">
                    <div class="input_group">
                        <label class="noti_input" for="usermail">이메일</label>
                        <input class="input_bar" type="text" id="usermail" name="usermail" placeholder="Type here" required />
                    </div>
                    <div class="input_group">
                        <label class="noti_input" for="password">비밀번호</label>
                        <input class="input_bar" type="text" id="password" name="password" placeholder="Type here" required />
                    </div>
                </div>
                
                <button class="login_button">로그인</button>
            </form>
            
        
        
        
        
        
        </div>
    

    </div>

</template>

<script>
</script>

<style scoped src="./MainTest.css"></style>
