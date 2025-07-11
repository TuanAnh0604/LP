<template>

    <div class="mission-grid">
      <div class="mission-text">
        <h2 class="section-title">Sứ mệnh & Giá Trị</h2>
        <p class="section-paragraph">
          BTEC FPT mang trong mình sứ mệnh tạo nên một thế hệ sinh viên năng động, sáng tạo và hội nhập toàn cầu. 
          Chúng tôi cam kết cung cấp chương trình đào tạo chuẩn quốc tế, phát triển toàn diện kỹ năng cá nhân và chuyên môn.
        </p>
        <p class="section-paragraph">
          Với triết lý “Learning by doing”, sinh viên BTEC được tiếp cận môi trường học tập thực tiễn, hiện đại, và có cơ hội thực hành thường xuyên, 
          giúp các bạn tự tin sẵn sàng bước vào thị trường lao động trong và ngoài nước.
        </p>
      </div>
      <div class="mission-image">
        <img src="/images/ms.jpg" alt="BTEC Mission" />
      </div>
    </div>
</template>

<script setup>
// Không cần logic thêm cho component này
</script>

<style scoped>


.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.mission-image img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .mission-image {
    order: -1; /* Đưa ảnh lên trước */
  }
}
</style>
