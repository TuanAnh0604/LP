<template>
  <section class="sisu-section">
  <div class="sisu-container">
    <div class="sisu-text">
      <h2 class="sisu-title">Từ sĩ tử đến sinh viên quốc tế</h2>
      <p class="sisu-subtitle">
        Vượt qua kỳ thi quan trọng, bạn không chỉ là một sĩ tử, mà đã sẵn sàng bước vào hành trình mới. BTEC mang đến lựa chọn học tập quốc tế, định hướng nghề nghiệp rõ ràng và cơ hội phát triển toàn diện cho thế hệ trẻ Việt Nam.
      </p>
      <p class="sisu-highlight">Đừng để lựa chọn bị giới hạn bởi một kỳ thi — hãy mở ra cánh cửa mới cùng BTEC.</p>
      <button class="sisu-btn">Khám phá hành trình tại BTEC</button>
    </div>
    <div class="sisu-image">
      <img src="/images/bem.jpg" alt="Hình ảnh sĩ tử" />
    </div>
  </div>
</section>

</template>

<script>
export default {

}
</script>

<style scoped>
.sisu-section {
  background-color: #fff5f0;
  padding: 80px 20px;
}

.sisu-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.sisu-text {
  flex: 1;
}

.sisu-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 20px;
}

.sisu-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 16px;
}

.sisu-highlight {
  font-size: 16px;
  font-style: italic;
  color: #d97706;
  margin-bottom: 24px;
}

.sisu-btn {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sisu-btn:hover {
  background-color: #ea580c;
}

.sisu-image {
  flex: 1;
}

.sisu-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>