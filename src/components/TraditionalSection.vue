<template>

    <div id ="traditional" class="tradition-container">
      <div class="tradition-image">
        <img src="/images/bg.jpg" alt="Hình ảnh cổ truyền" />
        <div class="tradition-caption">
          “Những nét cổ truyền phai đâu<br />
          Vẫn in dấu cũ, đậm màu tương lai.”
        </div>
      </div>

      <div class="tradition-text">
        <h2 class="tradition-title">
          Giữ vững giá trị cổ truyền – Khởi đầu hành trình mới cùng BTEC FPT
        </h2>
        <p class="tradition-desc">
          Vượt qua những ngày ôn luyện miệt mài, các tân sinh viên hôm nay chính
          là những sĩ tử vững bước ngày hôm qua. Hành trình mới bắt đầu, mang
          theo tinh thần hiếu học ngàn đời: kiên trì, sáng tạo và không ngừng
          vươn xa.
        </p>
        <p class="tradition-highlight">
          Tại BTEC FPT, mỗi tân sinh viên không chỉ chinh phục tri thức hiện đại mà còn được tiếp nối truyền thống học tập bền bỉ, thấm đẫm bản sắc Việt. Đó là hành trang quý giá trên con đường hội nhập toàn cầu.


        </p>
      </div>
    </div>

</template>
<style scoped>
.tradition-section {
  background: #ffffff; /* vàng nhạt như giấy dó */
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
#traditional {
  scroll-margin-top: 100px;
}
.tradition-image {
  flex: 1;
}

.tradition-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.tradition-image {
  position: relative;
  display: inline-block;
}

.tradition-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}
.tradition-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Ma Shan Zheng", cursive;
  color: #5c3a1a;
  font-size: 28px; /* Tăng cỡ chữ */
  text-align: center;
  padding: 0 10px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.7);
  white-space: nowrap; 
}



.tradition-text {
  flex: 1;
  max-width: 500px; /* Giới hạn chiều rộng để text gọn */
}

.tradition-title {
  font-family: 'ZCOOL XiaoWei', serif;
  font-size: 31px;
  font-weight: bold;
  color: #b45309;
  line-height: 1.4;
  
}

.tradition-desc {
  font-size: 17px;
  color: #374151;
  line-height: 1.8; /* Giãn dòng thoáng hơn */
  margin-bottom: 16px;
  text-align: justify; /* Canh đều cho đẹp mắt */
}

.tradition-highlight {
  font-style: italic;
  color: #92400e;
  font-size: 16px;
  line-height: 1.8;
  text-align: justify;
}
.tradition-highlight::before {
  content: "“";
  font-size: 20px;
  color: #b45309;
}
.tradition-highlight::after {
  content: "”";
  font-size: 20px;
  color: #b45309;
}
@media (max-width: 768px) {
  .tradition-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 0 16px;
  }

  .tradition-text {
    max-width: 100%;
  }

  .tradition-title {
    font-size: 24px; /* To hơn một chút */
    text-align: center;
    line-height: 1.5;
  }

  .tradition-desc,
  .tradition-highlight {
    font-size: 16px;
    line-height: 1.8;
    text-align: justify; 
  }

  .tradition-caption {
    font-size: 25px;
    white-space: normal;
    padding: 0 10px;
    width: 100%;
  }
}

</style>