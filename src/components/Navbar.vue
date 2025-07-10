<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <img src="/images/bt.png" alt="BTEC FPT" />
      </div>
      <nav class="nav-links">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a href="#"
               :class="{ active: activeIndex === index }"
               @click.prevent="activeIndex = index">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/nav.css'

const navItems = ['Trang chủ', 'Giới thiệu', 'Chương Trình', 'Khóa Sĩ Tử', 'Liên hệ']
const activeIndex = ref(0) // Mặc định là 'Trang chủ'
</script>
