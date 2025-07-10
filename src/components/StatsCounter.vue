<template>
  <section class="stats-section" ref="sectionRef">
    <div class="stat-box" v-for="(stat, index) in stats" :key="index">
      <div class="stat-number">{{ displayValues[index] }}<span v-if="stat.suffix">{{ stat.suffix }}</span></div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Năm kinh nghiệm', value: 15, suffix: '+' },
  { label: 'Sinh viên có việc làm', value: 95, suffix: '%' },
  { label: 'Sinh viên đã tốt nghiệp', value: 10000, suffix: '+' },
  { label: 'Đối tác doanh nghiệp', value: 100, suffix: '+' }
]

const displayValues = ref(stats.map(() => 0))
const sectionRef = ref(null)

function animateCount(index, target, duration = 1500) {
  const start = performance.now()

  function update(time) {
    const elapsed = time - start
    const progress = Math.min(elapsed / duration, 1)
    displayValues.value[index] = Math.floor(progress * target)

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      displayValues.value[index] = target
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      stats.forEach((stat, i) => animateCount(i, stat.value))
      observer.disconnect()
    }
  }, { threshold: 0.3 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<style scoped>
.stats-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 16px;
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 2rem auto;
}

.stat-box {
  flex: 1 1 200px;
  text-align: center;
  margin: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #d94c59;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #333;
}
</style>
