<template>
  <div>
    <div id="home" class="page-container">
      <div class="page-background">
        <!-- Hiệu ứng hình lục giác toàn màn -->
        <div class="floating-cubes">
          <div
            class="cube"
            v-for="n in 5"
            :key="n"
            :style="{ '--i': n * 0.2 }"
          ></div>
        </div>
       <div class="floating-bubbles">
  <div
    class="bubble"
    v-for="n in 8"
    :key="n"
    :style="{
      '--i': n * 0.12,
      animationDelay: `${n * 1.8}s`
    }"
  ></div>
</div>

      </div>
      


        <HeroCarousel />
        <std />
        <TraditionalSection />

        <!-- Về trường -->

          <div id="about" class="container">
            <h2 class="section-title">Về Cao đẳng quốc tế BTEC</h2>
            
            <StatsCounter />
          </div>


        <!-- Chuyên ngành đào tạo -->
       
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
        
        <MissionView />
        <EnrollmentForm />
      
    </div>

    <!-- Banners ngoài page-container để full màn -->
    <div class="btec-banner-top">
      <div class="scroll-text-reverse">
        <span v-for="n in 20" :key="'rev-' + n">
          <img src="/images/v5.png" alt="star" class="icon-img" />
          <span class="text">
            BTEC <img src="/images/v5.png" alt="star" class="icon-img" /> btec.fpt.edu.vn
          </span>
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

     <!-- Footer ngoài page-container để full màn -->
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
          <p>Đào tạo theo chuẩn quốc tế, chú trọng ngoại ngữ, kỹ năng nghề nghiệp và ứng dụng công nghệ hiện đại như AI vào giảng dạy.</p>
        </div>
        <div class="footer-contact">
          <h4>LIÊN HỆ</h4>
          <div class="contact-links">
            <p><strong>Hotline 24/7:</strong><br><a href="tel:0329605828">0329 605 828</a></p>
            <p><strong>Email:</strong><br><a href="mailto:btecfpt@fpt.edu.vn">btecfpt@fpt.edu.vn</a></p>
            <p><strong>Website:</strong><br><a href="https://btec.fpt.edu.vn/" target="_blank" rel="noopener">https://btec.fpt.edu.vn/</a></p>
          </div>
        </div>
        <div class="footer-social">
          <h4>THEO DÕI CHÚNG TÔI</h4>
          <div class="social-icons">
            <a href="https://www.facebook.com/fptbtec" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/btec.fpt/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@fpt_btec" target="_blank" rel="noopener"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.youtube.com/@CAOANGQUOCTEBTECFPT" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
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
</template>


<script setup>
import { ref } from 'vue'
import HeroCarousel from './HeroCarousel.vue'
import std from './std.vue'
import TraditionalSection from './TraditionalSection.vue'
import MissionView from './MissionView.vue'
import StatsCounter from './StatsCounter.vue'
import EnrollmentForm from './EnrollmentForm.vue'

import '../assets/main.css'
import '../assets/major.css'
import '../assets/effect.css'

const cards = [
  {
    image: `${import.meta.env.BASE_URL}images/it.jpg`,
    title: 'Công nghệ thông tin',
    description: 'Lập trình Web, Mobile, Game, AI...'
  },
  {
    image: `${import.meta.env.BASE_URL}images/gd.jpg`,
    title: 'Thiết kế đồ hoạ',
    description: 'Mỹ thuật đa phương tiện, 2D, 3D...'
  },
  {
    image: `${import.meta.env.BASE_URL}images/mkt.jpg`,
    title: 'Quản Trị Kinh Doanh ',
    description: 'Marketing, Quản trị, Sales...'
  },
  {
    image: `${import.meta.env.BASE_URL}images/bd.jpg`,
    title: 'Công nghệ bán dẫn',
    description: 'Chip điện tử, linh kiện vi mạch, kỹ thuật bán dẫn...'
  }
]
</script>
