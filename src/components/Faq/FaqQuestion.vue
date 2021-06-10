<template>
  <div class="faq-question">
    <div class="heading">
      <div class="btn-arrow" @click="goBack()">
        <img src="@/assets/images/arrow-left.svg" alt="voltar">
      </div>
      <div class="heading-text">
        <h1>{{ $faq.title }}</h1>
        <p>Selecione uma pergunta</p>
      </div>
      <img class="heading-image" :src="require(`@/assets/images/${$faq.icon}`)" alt="Ícone">
    </div>
    
    <ul v-if="$faq" class="question">
      <li class="question-item"
        v-for="question in $faq.questions" 
        :key="question.id" 
        @click="goToAnwser(question)"
      >
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
  .heading {
    padding: 0 1.25rem 1.875rem 1.25rem;
    border-bottom: 1px solid #404451;
    color: #fff;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 1rem;
  }
  .btn-arrow {
    padding: .40rem 0.725rem;
    cursor: pointer;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color .2s ease-in-out;
  }
  .btn-arrow:hover {
    background-color: #26282C;
  }
  .heading-image, .btn-arrow img {
    width: 24px;
  }
  .heading-text h1 {
    font-size: 1.25rem;
  }
  .heading-text p {
    margin-top: 0.275rem;
    font-size: 0.825rem;
  }
  .question {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    padding-top: .813rem;
  }
  .question-item {
    font-size: 1rem;
    color: #f5f6f8;
    padding: 1rem 1.25rem;
    transition: background-color .2s ease-in-out;
  }
  .question-item:hover {
    background-color: #3F4452;
  }
</style>