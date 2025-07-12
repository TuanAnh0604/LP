<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <img src="/images/btv2.png" alt="BTEC FPT" />
      </div>
      <nav class="nav-links">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
  <a :href="'#' + item.target"
     :class="{ active: activeIndex === index }"
     @click.prevent="scrollToSection(item.target, index)">
    {{ item.label }}
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


const navItems = [
  { label: 'Trang chủ', target: 'home' },
  { label: 'Giới thiệu', target: 'about' },
  { label: 'Cổ truyền', target: 'traditional' },
  { label: 'Sĩ Tử', target: 'std' },
  { label: 'Liên hệ', target: 'contact' }
]

const activeIndex = ref(0) 
const scrollToSection = (id, index) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeIndex.value = index
  }
}

</script>
