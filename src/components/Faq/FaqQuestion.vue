<template>
  <div class="faq-question">
    <span @click="goBack()"> =-</span>
    <ul v-if="$faq">
      <li v-for="question in $faq.questions" :key="question.id" @click="goToAnwser(question)">
      {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      $faq() {
        return this.$store.getters.$getFaq
      }
    },
    methods: {
      goToAnwser(question) {
        this.$store.dispatch('goTo', { page: 'FaqAnswer' }),
        this.$store.dispatch('selectQuestion', question)
      },
      goBack() {
        this.$store.dispatch('goBack', { page: 'Faq' })
      }
    }
  }
</script>

<style scoped>

</style>