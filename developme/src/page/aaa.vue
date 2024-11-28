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
        <aside v-if="isSidebarVisible" class="ranking">
            <button @click="toggleSidebar">
                {{ isSidebarVisible ? '메뉴로 전환' : '랭킹으로 전환' }}
            </button>
            <h2>랭킹</h2>
            <ul>
                <li>
                    <img src="../assets/images/임시사용이미지.png" class="medal_image" />
                    1. 사용자 A
                </li>
                <li>
                    <img src="../assets/images/임시사용이미지.png" class="medal_image" />
                    2. 사용자 B
                </li>
                <li>
                    <img src="../assets/images/임시사용이미지.png" class="medal_image" />
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
                <img id="tree" src="../assets/images/Algorythm_tree.png" alt="나무 이미지">
                <div class="grid">
                    <div 
                        v-for="(day, index) in stampedDays" 
                        :key="index" 
                        class="cell"
                        :style="`left: ${day.x}%; top: ${day.y}%;`"
                    >
                        <span v-if="!day.isStamped" class="day-number">{{ index + 1 }}</span>
                        <img 
                            v-if="day.isStamped" 
                            src="../assets/images/임시사용이미지.png" 
                            alt="Stamped" 
                            class="stamp"
                        />
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
            days: [
                { x: 10, y: 20 }, // 나무의 좌측 상단 10% x, 20% y 위치
                { x: 30, y: 50 }, // 나무의 중앙쯤
                { x: 50, y: 80 }, // 나무 하단부
                { x: 70, y: 30 },
                { x: 90, y: 10 }
            ],
            attendanceData: [
                true, false, true, false, true // 출석 여부 데이터
            ]
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        }
    },
    computed: {
        stampedDays() {
            return this.days.map((day, index) => ({
                ...day,
                isStamped: this.attendanceData[index] || false
            }));
        }
    }
};
</script>







<style scoped src="./MainTest.css"></style>