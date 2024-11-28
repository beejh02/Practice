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
        
            <button @click="toggleSidebar">
            {{ isSidebarVisible ? '메뉴로 전환' : '랭킹으로 전환' }}
            </button>
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
            <button @click="toggleSidebar">
            {{ isSidebarVisible ? '메뉴로 전환' : '랭킹으로 전환' }}
            </button>
            <h2>메뉴</h2>
            <ul>
                <li><a href="#">메뉴 1</a></li>
                <li><a href="#">메뉴 2</a></li>
                <li><a href="#">메뉴 3</a></li>
            </ul>
        </aside>

        <section class="content">
            <div class="tree-container">
                <!-- 출석판을 트리 이미지 위에 올려놓습니다 -->
                <img id="tree" src="../assets/images/Algorythm_tree.png">
                <div class="attendance-overlay">
                    <div class="grid">
                        <div 
                            v-for="(day, index) in days" 
                            :key="index" 
                            class="cell"
                        >
                            <img 
                                v-if="day.isStamped" 
                                src="../assets/images/임시사용이미지.png" 
                                alt="Stamped" 
                                class="stamp"
                            />
                            <span>{{ index + 1 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
export default {
    data() {
        return {
            isSidebarVisible: true, // 초기 상태: 랭킹 표시
            days: Array(20).fill({ isStamped: false }) // 20개의 출석 칸을 초기화
        };
    },
    methods: {
        toggleSidebar() {
            // 사이드바 상태를 토글
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        setAttendanceData() {
            const attendanceData = [
                true, false, true, false, true, false, false, true, true, false, 
                false, true, false, true, true, false, false, true, true, false
            ]; // 서버에서 받을 데이터 예시

            this.days = this.days.map((day, index) => ({
                isStamped: attendanceData[index] || false, // 출석 여부에 따라 스탬프 표시
            }));
        }
    },
    mounted() {
        this.setAttendanceData(); // 페이지가 로드될 때 출석 데이터 세팅
    }
};
</script>







<style scoped src="./MainTest.css"></style>