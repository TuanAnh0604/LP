<template>
  <div class="mission-section">
    <div class="mission-wrapper">
      <div class="mission-grid">
        <div class="mission-text">
          <h2 class="section-title">Sứ mệnh</h2>
          <div class="mission-content">
            <div class="mission-inner-text">
              <h2 class="mission-title">
                Tiên phong trong cuộc đua các chương trình học hiện đại,
                được chuẩn hoá từ quốc tế đến với sinh viên Việt Nam.
              </h2>
              <p class="mission-description">
                <strong>BTEC FPT</strong> sẽ là mũi nhọn, tiên phong trong cuộc
                đua các chương trình học hiện đại, được chuẩn hoá từ quốc tế đến
                với sinh viên Việt Nam. Chúng tôi mong muốn tạo nên một thế hệ trẻ
                dẫn đầu tương lai, được thừa hưởng tinh hoa của các nền giáo dục
                tiên tiến trên thế giới.
              </p>
              <p class="mission-description">
                Với đội ngũ nhiều kinh nghiệm, chương trình đào tạo được cập nhật
                hằng năm và kiểm soát <strong>3 cấp độ</strong> bởi
                <strong>BTEC FPT</strong>, <strong>FPT Education</strong> và
                <strong>Pearson Education</strong>, chúng tôi tin rằng sinh viên
                được trải nghiệm chương trình học <strong>đẳng cấp</strong>,
                <strong>chuyên nghiệp</strong> và <strong>sát thực tiễn</strong>.
              </p>
            </div>
          </div>
        </div>
        <div class="mission-image">
          <img src="/images/mrlong.jpg" alt="BTEC Mission" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mission-section {
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
}

.mission-wrapper {

  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 1300px;
  width: 100%;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1a202c;
}

.mission-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
}

.mission-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1rem;
  text-align: justify;
}

.mission-image img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .mission-image {
    order: -1;
  }

  .mission-wrapper {
    padding: 1.5rem;
  }
}
</style>
