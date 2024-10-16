<template>
    <div class="dropdown" @click="toggleDropdown" ref="dropdown">
      <button class="dropdown-button">메뉴   d</button>
      <div v-if="isOpen" class="dropdown-content">
        <a href="1">메뉴 1</a>
        <a href="2">메뉴 2</a>
        <a href="3">메뉴 3</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isOpen = ref(false);
  
  function toggleDropdown() {
    isOpen.value = !isOpen.value;
  }
  
  function handleClickOutside(event) {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
      isOpen.value = false;
    }
  }
  
  onMounted(() => {
    window.addEventListener('click', handleClickOutside);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  <style src="./MainTest.css"></style>
  