<template>
  <div
    class="relative h-[520px] md:h-[600px] flex items-center justify-center text-center text-white transition-all duration-1000 bg-cover bg-center"
    :style="{ backgroundImage: `url(${currentSlide.image})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    <div class="relative z-20 px-4 max-w-2xl mt-10 md:mt-20">
      <h1 class="text-2xl md:text-4xl font-bold mb-3 leading-snug">{{ currentSlide.title }}</h1>
      <p class="text-sm md:text-lg mb-4">{{ currentSlide.subtitle }}</p>
      <a href="#contact" class="bg-white text-indigo-700 px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
        Khám phá ngay
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    title: 'BTEC – Nơi bắt đầu hành trình tri thức',
    subtitle: 'Mùa hè thức giấc ban mai, sĩ tử khoác mộng xanh tươi...',
    image: 'https://images.unsplash.com/photo-1531346543789-a94d4f2b41a7?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Kiến tạo tương lai với đam mê',
    subtitle: 'Chữ yêu tri thức chắt chao bao ngày, gửi trao đam mê dựng xây tương lai.',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-5-1664783078981949571938.jpg'
  },
  {
    title: 'Vươn xa cùng BTEC quốc tế',
    subtitle: 'Không ngừng sáng tạo, mở mang, mỗi dòng code viết, mỗi trang nghĩa tình.',
    image: 'https://channel.mediacdn.vn/428462621602512896/2022/10/3/photo-5-1664783078981949571938.jpg'
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
