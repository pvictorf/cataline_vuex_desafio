<template>
  <div class="faq-answer">
    <div class="heading">
      <div class="btn-arrow" @click="goBack()">
        <img src="@/assets/images/arrow-left.svg" alt="voltar" />
      </div>
      <div class="heading-text">
        <p>{{ $question.title }}</p>
      </div>
    </div>
    <div v-if="$question" class="answer-content">
      <p class="answer-text" v-html="$question.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $question() {
      return this.$store.getters.$getQuestion
    }
  },
  methods: {
    goBack() {
      const lastSearch = this.$store.getters.$getLastSearch;
      if(lastSearch) {
        return this.$store.dispatch('goBack', { page: 'FaqSearch' })
      }
      this.$store.dispatch('goBack', { page: 'FaqQuestion' })
    }
  }
}
</script>

<style scoped>
.heading {
  padding: 0 1.25rem 1.875rem 1.25rem;
  color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 1rem;
}
.btn-arrow {
  padding: 0.4rem 0.725rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
}
.btn-arrow:hover {
  background-color: #26282c;
}
.heading-image,
.btn-arrow img {
  width: 24px;
}
.heading-text p {
  font-size: 1rem;
}
.answer-content {
  font-size: 0.850rem;
  color: #f5f6f8;
  padding: 0 1.25rem 1.875rem 1.25rem;
  line-height: 1.25rem;
}
</style>
