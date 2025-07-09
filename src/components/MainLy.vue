<template>
  <div class="font-sans text-gray-800">
    <HeroCarousel />

      <!-- Giới thiệu -->
      <section class="py-16 px-6 max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Sứ mệnh & Giá trị</h2>
        <p class="mb-4">
          Nắng soi trang vở hôm nào, chữ yêu tri thức chắt chao bao ngày. Tại BTEC, chúng tôi nuôi dưỡng
          tâm hồn trong trẻo, gửi trao đam mê và dựng xây tương lai.
        </p>
      </section>

      <!-- Về trường -->
      <section class="bg-gray-100 py-16 px-6">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold mb-6">Về BTEC</h2>
          <p class="mb-4">
            BTEC – ngọn gió miệt mài, cao đẳng quốc tế với tinh thần hội nhập. Khơi lên bản lĩnh, nối liền
            thời gian và truyền thống giáo dục Việt.
          </p>
        </div>
      </section>

      <!-- Chuyên ngành -->
      <section class="py-16 px-6 max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Chuyên ngành đào tạo</h2>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li class="bg-white p-6 rounded-lg shadow">🖥️ Công nghệ thông tin</li>
          <li class="bg-white p-6 rounded-lg shadow">📊 Quản trị kinh doanh</li>
          <li class="bg-white p-6 rounded-lg shadow">🎨 Thiết kế đồ họa</li>
        </ul>
        <p class="mt-6 text-gray-600 italic">
          “Mỗi dòng code viết, mỗi trang nghĩa tình – gieo vào từng phút học hành một tinh thần Việt.”
        </p>
      </section>

      <!-- Cựu sinh viên -->
      <section class="bg-gray-100 py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Cựu sinh viên nói gì?</h2>
          <blockquote class="italic text-lg">
            “Trường xưa vọng lại lời ca... Trí tài kết tụ nơi đây, cho ngày thăng hoa.”
          </blockquote>
          <p class="mt-4">– Nguyễn Văn A, Dev tại FPT Software</p>
        </div>
      </section>

      <!-- Liên hệ -->
      <section class="py-16 px-6 bg-blue-600 text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Liên hệ & Đăng ký</h2>
          <p class="mb-4">Hãy để lại thông tin để được tư vấn chi tiết về các chương trình đào tạo.</p>
          <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input v-model="name" type="text" placeholder="Họ tên" class="p-3 rounded text-gray-800" />
            <input v-model="email" type="email" placeholder="Email" class="p-3 rounded text-gray-800" />
            <button type="submit" class="bg-white text-blue-600 font-bold py-3 rounded hover:bg-gray-200">
              Gửi ngay
            </button>
          </form>
          <p v-if="submitted" class="mt-4 text-green-200">✔️ Cảm ơn bạn đã đăng ký!</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-gray-500 bg-gray-50">
        © 2025 Trường Cao đẳng Quốc tế BTEC – Mọi quyền được bảo lưu
      </footer>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import HeroCarousel from './HeroCarousel.vue'

  const name = ref('')
  const email = ref('')
  const submitted = ref(false)

  function submitForm() {
    if (name.value && email.value) {
      console.log('Thông tin:', name.value, email.value)
      submitted.value = true
      name.value = ''
      email.value = ''
    }
  }
  </script>

  <style scoped>  </style>
