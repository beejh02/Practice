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

    
    <div id = "content">
        <div class="calendar_container">
            <div class="calendar_header">
                <div class="header_title">
                <span>{{ monthNames[month] }} {{ year }}</span>
                </div>
                <div class="header_controls">
                <button @click="previousMonth">이전</button>
                <button @click="nextMonth">다음</button>
                </div>
            </div>
            <div class="calendar_grid">
                <div class="day_name" v-for="day in dayNames" :key="day">{{ day }}</div>
                    <div class="calendar_day" v-for="(day, index) in calendarDays" :key="index" :class="{ 'today': isToday(day), 'empty': day === null }">
                    <div v-if="day" class="day_number">{{ day }}</div>
                    <div v-if="day" class="day_notes">들어갈 부분</div>
                </div>
            </div>
        </div>
        <div id = "calender_setting">
            <div id = "monthly_plan">
                <div id= "shape_monthly_plan">
                    <span id = "font_monthly_plan">나의 한달 계획</span>
                </div>
                <div class= "monthly_plan_category">
                    <div id = "shape_category">
                        <span id = "font_category">CATEGORY</span>
                    </div>
                    <div id = "monthly_plan_category_list">
                        <div class = "category_list" v-for="catego in category" :key="catego">{{ catego }}></div>
                    </div>
                </div>
            </div>
            <div id = "set_plan">

            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            currentDate: new Date(),
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ],
            category: ["약속", "학교", "프로젝트", "중요", "개인 공부"],
            };
        },
    computed: {
        calendarDays() {
            const firstDay = new Date(this.year, this.month, 1).getDay();
            const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
            const daysArray = Array(firstDay).fill(null).concat(
            new Array(daysInMonth).fill().map((_, index) => index + 1)
            );
            return daysArray;
            },
        },
    methods: {
        previousMonth() {
            if (this.month === 0) {
            this.month = 11;
            this.year__;
            } else {
            this.month__;
            }
        },
    nextMonth() {
            if (this.month === 11) {
                this.month = 0;
                this.year++;
            } else {
                this.month++;
            }
        },
    isToday(day) {
            const today = new Date();
            return (
            day === today.getDate() &&
            this.month === today.getMonth() &&
            this.year === today.getFullYear()
            );
        },
    },
    selectMenu(index) {
        this.selectedMenu = index; // 선택된 메뉴의 인덱스를 설정
    }
};
</script>





<style scoped src="./MainTest.css"></style>