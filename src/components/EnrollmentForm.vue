<template>
  <section class="enrollment-form">
    <div class="form-container">
      <div class="form-left">
        <img src="/images/form-bg.jpg" alt="Student" class="form-image" />
      </div>
      <div class="form-right">
        <h3 class="form-subtitle">Nhập học liền tay</h3>
        <h2 class="form-title">
          Nhận ngay học bổng lên<br />
          <span class="highlight">tới 70% học phí</span>
        </h2>
        <form @submit.prevent="submitForm" class="form-fields">
          <div class="form-group">
            <label for="name">Họ và tên <span>*</span></label>
            <input type="text" id="name" placeholder="Nhập họ tên" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="phone">Số điện thoại <span>*</span></label>
            <input type="tel" id="phone" placeholder="Nhập số điện thoại" v-model="form.phone" required />
          </div>
          <div class="form-group">
            <label for="birth">Năm sinh <span>*</span></label>
            <input type="text" id="birth" placeholder="Năm sinh*" v-model="form.birth" required />
          </div>
          <div class="form-group">
            <label for="campus">Cơ sở <span>*</span></label>
            <select id="campus" v-model="form.campus" required>
              <option disabled value="">Chọn cơ sở*</option>
              <option>Hà Nội</option>
              <option>Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
              <option>Cần Thơ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="major">Ngành học</label>
            <select id="major" v-model="form.major">
              <option disabled value="">Chọn ngành học</option>
              <option>Công nghệ thông tin</option>
              <option>Thiết kế đồ họa</option>
              <option>Quản trị kinh doanh</option>
              <option>Công nghệ bán dẫn</option>
            </select>
          </div>
          <button type="submit" class="submit-btn">Gửi đăng ký</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  birth: '',
  campus: '',
  major: ''
})

function submitForm() {
  if (form.value.name && form.value.phone && form.value.birth && form.value.campus) {
    console.log('Form Submitted:', form.value)
    // Thêm xử lý gửi form tại đây
  } else {
    alert('Vui lòng điền đầy đủ thông tin bắt buộc.')
  }
}
</script>

<style scoped>
.enrollment-form {
  background-color: #f1f3fb;
  padding: 2rem 0;
}

.form-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f1f3fb;
}

.form-left {
  flex: 1 1 50%;
  background: linear-gradient(to bottom right, #1f3c88, #00c6ff);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.form-right {
  flex: 1 1 50%;
  background-color: #e9ecf9;
  padding: 2rem;
}

.form-subtitle {
  font-size: 1rem;
  color: #1a237e;
  margin-bottom: 0.5rem;
}

.form-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1a237e;
}

.form-title .highlight {
  color: #f57921;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: inline-block;
  color: #333;
}

.form-group span {
  color: red;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.submit-btn {
  background-color: #f57921;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #d96614;
}

@media (max-width: 768px) {
  .form-container {
    flex-direction: column;
  }
  .form-left, .form-right {
    flex: 1 1 100%;
  }
}
</style>
