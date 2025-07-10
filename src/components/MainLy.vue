<template>
  <div class="page-background">
    <!-- floating-cubes -->
    <div class="floating-cubes"></div>

    <div class="main-container">
       <div>
    <!-- Hiệu ứng hình lục giác toàn màn -->
    <div class="floating-cubes">
      <div class="cube" v-for="n in 5" :key="n" :style="{ '--i': n * 0.2 }"></div>
    </div>

    <div class="main-container">
      <HeroCarousel />

      <!-- Giới thiệu -->
      <section class="section">
        <h2 class="section-title">Sứ mệnh & Giá trị</h2>
        <p class="section-paragraph">
          Nắng soi trang vở hôm nào, chữ yêu tri thức chắt chao bao ngày. Tại BTEC, chúng tôi nuôi dưỡng
          tâm hồn trong trẻo, gửi trao đam mê và dựng xây tương lai.
        </p>
      </section>

      <!-- Về trường -->
      <section class="section section-gray">
        <div class="container">
          <h2 class="section-title">Về BTEC</h2>
          <p class="section-paragraph">
            BTEC – ngọn gió miệt mài, cao đẳng quốc tế với tinh thần hội nhập. Khơi lên bản lĩnh, nối liền
            thời gian và truyền thống giáo dục Việt.
          </p>
        </div>
      </section>
  <section class="section">
    <div class="training-header">
  <div class="training-title">Chuyên ngành đào tạo</div>
  <div class="training-description">
    Chúng tôi cung cấp các chương trình đào tạo chuyên sâu, hiện đại và thực tiễn, giúp sinh viên phát triển toàn diện kỹ năng chuyên môn, tư duy sáng tạo và năng lực công nghệ để sẵn sàng thích ứng với thị trường lao động toàn cầu không ngừng đổi mới.
  </div>
</div>

    <div class="majors-grid">
      <div v-for="card in cards" :key="card.title" class="major-card">
        <img :src="card.image" :alt="card.title" class="major-image" />
        <div class="major-content">
          <h3 class="major-title">{{ card.title }}</h3>
          <p class="major-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>


      <!-- Cựu sinh viên -->
      <section class="section section-gray">
        <div class="alumni">
          <h2 class="section-title">Cựu sinh viên nói gì?</h2>
          <blockquote class="alumni-quote">
            “Trường xưa vọng lại lời ca... Trí tài kết tụ nơi đây, cho ngày thăng hoa.”
          </blockquote>
          <p class="alumni-name">– Nguyễn Văn A, Dev tại FPT Software</p>
        </div>
      </section>


      <!-- Liên hệ -->
      <section class="section contact-section">
        <div class="contact-form">
          <h2 class="section-title">Liên hệ & Đăng ký</h2>
          <p class="section-paragraph">Hãy để lại thông tin để được tư vấn chi tiết về các chương trình đào tạo.</p>
          <form @submit.prevent="submitForm" class="form-grid">
            <input v-model="name" type="text" placeholder="Họ tên" class="input" />
            <input v-model="email" type="email" placeholder="Email" class="input" />
            <button type="submit" class="button">Gửi ngay</button>
          </form>
          <p v-if="submitted" class="form-success">✔️ Cảm ơn bạn đã đăng ký!</p>
        </div>
      </section>
<div class="btec-banner-top">
  <div class="scroll-text-reverse">
    <span v-for="n in 20" :key="'rev-' + n">
      <img src="/images/v5.png" alt="star" class="icon-img" />
      <span class="text">BTEC <img src="/images/v5.png" alt="star" class="icon-img" /> btec.fpt.edu.vn</span>
      <img src="/images/v5.png" alt="star" class="icon-img" />
    </span>
  </div>
</div>
 <div class="btec-banner-bottom">
  <div class="scroll-text">
    <span v-for="n in 20" :key="n">
      <img src="/images/v5.png" alt="star" class="icon-img" />
      <span class="text">Btec Trạng Code</span>
      <img src="/images/v5.png" alt="star" class="icon-img" />
    </span>
  </div>
</div>
<div class="footer-container">
  <div class="footer-grid">
    <div class="footer-block">
      <h4>BTEC FPT Hà Nội</h4>
      <p><strong>Địa chỉ:</strong> Toà BTEC FPT, Trịnh Văn Bô, Nam Từ Liêm, TP. Hà Nội</p>
      <p><strong>Thời gian:</strong> Thứ 2 – Thứ 6: 8h30 – 17h30, Thứ 7: 8h30 – 12h30</p>
    </div>
    <div class="footer-block">
      <h4>BTEC FPT Đà Nẵng</h4>
      <p><strong>Địa chỉ:</strong> 66 Võ Văn Tần, Q. Thanh Khê, TP. Đà Nẵng</p>
      <p><strong>Thời gian:</strong> Thứ 2 – Thứ 6: 8h30 – 17h30, Thứ 7: 8h30 – 12h30</p>
    </div>
    <div class="footer-block">
      <h4>BTEC FPT Hồ Chí Minh</h4>
      <p><strong>Địa chỉ:</strong> Toà F, công viên phần mềm Quang Trung, Q.12, TP.HCM</p>
      <p><strong>Thời gian:</strong> Thứ 2 – Thứ 6: 8h30 – 17h30, Thứ 7: 8h30 – 12h30</p>
    </div>
    <div class="footer-block">
      <h4>BTEC FPT Cần Thơ</h4>
      <p><strong>Địa chỉ:</strong> Đường số 22, P. Thường Thạnh, Q. Cái Răng, TP. Cần Thơ</p>
      <p><strong>Thời gian:</strong> Thứ 2 – Thứ 6: 8h30 – 17h30, Thứ 7: 8h30 – 12h30</p>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-logo-block">
      <img src="/images/btv2.png" alt="BTEC logo" class="footer-logo">
      <p>Với chúng tôi, không có giới hạn cho sự sáng tạo và phát triển. Hãy để chúng tôi giúp bạn tỏa sáng trong môi trường kỹ thuật số!</p>
    </div>
    <div class="footer-contact">
      <h4>LIÊN HỆ</h4>
      <p><strong>Hotline 24/7:</strong><br>0329 605 828</p>
      <p><strong>Email:</strong><br>btecfpt@fpt.edu.vn</p>
      <p><strong>Website:</strong><br>https://btec.fpt.edu.vn/</p>
    </div>
    <div class="footer-social">
      <h4>THEO DÕI CHÚNG TÔI</h4>
      <div class="social-icons">
        <!-- icons ở đây -->
        <div class="social-icons">
      <i class="fab fa-facebook" src="https://www.facebook.com/fptbtec"></i>
      <i class="fab fa-instagram" src="https://www.instagram.com/btec.fpt/"></i>
      <i class="fab fa-tiktok" src="https://www.tiktok.com/@fpt_btec"></i>
      <i class="fab fa-youtube" src="https://www.youtube.com/@CAOANGQUOCTEBTECFPT"></i>
    </div>
      </div>
    </div>
    <div class="footer-subscribe">
      <h4>ĐĂNG KÝ NHẬN THÔNG TIN</h4>
      <input type="email" placeholder="Email" class="footer-input">
    </div>
  </div>

  <div class="footer-credit">
    © 2025 Trường Cao đẳng Quốc tế BTEC – Mọi quyền được bảo lưu
  </div>
</div>
    </div>
  </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroCarousel from './HeroCarousel.vue'
import '../assets/main.css'
import '../assets/major.css'
import '../assets/effect.css'
const cards = [
  {
    image: '/images/it.jpg',
    title: 'Công nghệ thông tin',
    description: 'Lập trình Web, Mobile, Game, AI...'
  },
  {
    image: '/images/mkt.jpg',
    title: 'Quản trị kinh doanh',
    description: 'Chiến lược, Marketing, Quản trị dự án...'
  },
  {
    image: '/images/gd.jpg',
    title: 'Thiết kế đồ họa',
    description: 'Thiết kế 2D, 3D, UI/UX...'
  },
  {
    image: '/images/bd.jpg',
    title: 'Công nghệ bán dẫn',
    description: 'Vi xử lý, sản xuất chip, IC...'
  }
];
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