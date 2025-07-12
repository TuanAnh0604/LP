<template>
  <section class ="ctn">
  <div class="hero-wrapper">
    <div class="hero-slide" :style="{ backgroundImage: `url(${currentSlide.image})` }">
      <div class="overlay"></div>
    </div>
  </div>
</section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '../assets/carousel.css'

const slides = [
  {
    title: 'BTEC – Nơi bắt đầu hành trình tri thức',
    subtitle: 'Mùa hè thức giấc ban mai, sĩ tử khoác mộng xanh tươi...',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-3-1664783078411117733867.jpg'
  },
  {
    title: 'Kiến tạo tương lai với đam mê',
    subtitle: 'Chữ yêu tri thức chắt chao bao ngày, gửi trao đam mê dựng xây tương lai.',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-5-1664783078981949571938.jpg'
  },
  { 
    title: 'Vươn xa cùng BTEC quốc tế',
    subtitle: 'Không ngừng sáng tạo, mở mang, mỗi dòng code viết, mỗi trang nghĩa tình.',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-2-1664783078318673057764.jpg'
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