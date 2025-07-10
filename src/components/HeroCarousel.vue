<template>
  <div>
    <div class="hero-slide" :style="{ backgroundImage: `url(${currentSlide.image})` }">
      <!-- Lớp nền mờ -->
      <div class="overlay"></div>

      <!-- Nội dung -->
      <div class="content">
        <h1 class="title">{{ currentSlide.title }}</h1>
        <p class="subtitle">{{ currentSlide.subtitle }}</p>
        <a href="#contact" class="cta-button">Khám phá ngay</a>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '../assets/carousel.css'

const slides = [
  {
    title: 'BTEC – Nơi bắt đầu hành trình tri thức',
    subtitle: 'Mùa hè thức giấc ban mai, sĩ tử khoác mộng xanh tươi...',
    image: 'images/brand-05.png'
  },
  {
    title: 'Kiến tạo tương lai với đam mê',
    subtitle: 'Chữ yêu tri thức chắt chao bao ngày, gửi trao đam mê dựng xây tương lai.',
    image: 'images/brand-01.png'
  },
  { 
    title: 'Vươn xa cùng BTEC quốc tế',
    subtitle: 'Không ngừng sáng tạo, mở mang, mỗi dòng code viết, mỗi trang nghĩa tình.',
    image: 'images/brand-03.png'
  }
]

const currentIndex = ref(0)
const currentSlide = ref(slides[0])
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
    currentSlide.value = slides[currentIndex.value]
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>