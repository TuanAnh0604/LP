<template>
  <div id="contact" class="form-container">
    <div class="form-card">
      <div class="form-body">
        <div class="form-left">
          <h2 class="title">Cơ hội học chương trình Anh Quốc với học bổng tới 70%</h2>
          <p class="subtitle">Liệu bạn có bỏ lỡ?<strong></strong></p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input v-model="form.name" type="text" placeholder="Họ và tên *" required />
            </div>
            <div class="form-group">
              <input v-model="form.phone" type="tel" placeholder="Số điện thoại *" required />
            </div>
            <div class="form-group">
              <input v-model="form.email" type="email" placeholder="Email *" required />
            </div>
            <div class="form-group">
              <select v-model="form.campus" required>
                <option disabled value="">Chọn cơ sở*</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>TP.HCM</option>
              </select>
            </div>
            <div class="form-group">
              <select v-model="form.major" required>
                <option disabled value="">Chọn ngành học</option>
                <option>Công nghệ thông tin</option>
                <option>Thiết kế đồ họa</option>
                <option>Marketing</option>
                <option>Quản trị kinh doanh</option>
              </select>
            </div>
            <button class="submit-btn" type="submit">Gửi đăng ký</button>
          </form>
        </div>
        <div class="form-right">
          <img src="/images/bem.png" alt="form bên phải" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/email.css'
export default {
  name: 'EnrollmentForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        campus: '',
        major: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      alert('Đăng ký thành công!');
    }
  }
}
</script>
