<template>
  <div class="kanban-board">
      <div class="board-header">
      <h2>May 2024</h2>
      <button @click="changeDate">날짜 변경</button>
      </div>
      <div class="board-columns">
      <div v-for="(column, index) in columns" :key="index" class="column">
          <h3>{{ column.title }} <span>{{ column.tasks.length }}</span></h3>
          <div class="tasks">
          <div v-for="(task, idx) in column.tasks" :key="idx" class="task-card">
              <p>{{ task.name }}</p>
          </div>
          <button class="add-task-btn" @click="addTask(index)">Add task</button>
          </div>
      </div>
      </div>
  </div>
</template>


<script>
export default {
  data() {
      return {
      columns: [
          { title: 'Get Started', tasks: [{ name: 'Welcome to your board' }, { name: 'Find your files' }, { name: 'Branding & Assets' }, { name: 'Manage your subscription' }] },
          { title: 'Requests Backlog', tasks: [{ name: 'Pricing page' }, { name: 'Contact us page' }, { name: 'Google Chrome Extension Redesign' }, { name: 'X/Twitter Cover' }] },
          { title: 'In Progress', tasks: [{ name: 'Home page' }, { name: 'Schedule custom reporting' }] },
          { title: 'Approved', tasks: [{ name: 'Search history for Backlinks and Keywords tool' }, { name: 'Billing and Checkout' }, { name: 'Backlinks chart' }, { name: 'Onboarding process' }] },
      ],
      };
  },
  methods: {
      changeDate() {
      // 날짜 변경 로직
      },
      addTask(columnIndex) {
      // 새로운 작업 추가 로직
      const newTaskName = prompt("Enter task name:");
      if (newTaskName) {
          this.columns[columnIndex].tasks.push({ name: newTaskName });
      }
      },
  },
};
</script>

<style scoped src="./TodoPage.css"></style>
