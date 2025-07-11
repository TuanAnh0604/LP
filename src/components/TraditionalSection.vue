<template>
    <section class="tradition-section">
  <div class="tradition-container">
    <div class="tradition-image">
      <img src="/images/bg.jpg" alt="Hình ảnh cổ truyền" />
    </div>
    <div class="tradition-text">
      <h2 class="tradition-title">Giữ vững giá trị cổ truyền – Vững bước ra thế giới</h2>
      <p class="tradition-desc">
        Học tập không chỉ là tiếp thu tri thức mới – mà còn là giữ gìn và phát huy tinh thần học tập truyền thống của người Việt: cần cù, sáng tạo và tôn trọng tri thức.
      </p>
      <p class="tradition-highlight">
        Tại BTEC, sinh viên không chỉ được học tập theo chuẩn quốc tế mà còn được khơi dậy tinh thần hiếu học cổ truyền qua từng bài giảng, từng hoạt động.
      </p>
    </div>
  </div>
</section>

</template>
<style scoped>
.tradition-section {
  background: #fef3c7; /* vàng nhạt như giấy dó */
  padding: 80px 20px;
}

.tradition-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.tradition-image {
  flex: 1;
}

.tradition-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tradition-text {
  flex: 1;
}

.tradition-title {
  font-size: 26px;
  font-weight: bold;
  color: #b45309; /* nâu cam kiểu gỗ truyền thống */
  margin-bottom: 16px;
}

.tradition-desc {
  font-size: 16px;
  color: #374151;
  margin-bottom: 12px;
  line-height: 1.6;
}

.tradition-highlight {
  font-style: italic;
  color: #92400e;
  font-size: 15px;
}

</style>