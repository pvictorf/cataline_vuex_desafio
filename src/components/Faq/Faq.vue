<template>
  <div class="faq">
    <ul v-if="$allFaqs">
      <li v-for="faq in $allFaqs" :key="faq.id" @click="goToQuestions(faq)">
        {{ faq.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchFaqs')
  },
  computed: {
    $allFaqs() {
      return this.$store.getters.$allFaqs
    }
  },
  methods: {
    goToQuestions(faq) {
      this.$store.dispatch('goTo', { page: 'FaqQuestion' })
      this.$store.dispatch('selectFaq', faq)
    }
  }
}
</script>

<style scoped>
</style>