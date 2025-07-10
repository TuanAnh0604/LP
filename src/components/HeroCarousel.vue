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
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-2-1664783078318673057764.jpg'
  },
  {
    title: 'Kiến tạo tương lai với đam mê',
    subtitle: 'Chữ yêu tri thức chắt chao bao ngày, gửi trao đam mê dựng xây tương lai.',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-5-1664783078981949571938.jpg'
  },
  { 
    title: 'Vươn xa cùng BTEC quốc tế',
    subtitle: 'Không ngừng sáng tạo, mở mang, mỗi dòng code viết, mỗi trang nghĩa tình.',
    image: 'https://btec.fpt.edu.vn/wp-content/uploads/2023/07/cao-dang-anh-quoc-btec-fpt-co-nhung-nganh-nao.jpg.webp'
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