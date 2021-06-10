<template>
  <div class="faq-answer">
    <span @click="goBack()"> =-</span>
    <ul v-if="$question">
      <p class="answer" v-html="$question.content"></p>
    </ul>
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
      this.$store.dispatch('goBack', { page: 'FaqQuestion' })
    }
  }
}
</script>

<style scoped></style>
