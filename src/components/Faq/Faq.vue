<template>
  <div class="faq">
    <div class="heading-image">
      <img src="@/assets/images/astronaut.svg" alt="Astronout">
    </div>

    <div class="heading-text">
      <h1>Perguntas frequentes</h1>
      <p>Escolha a categoria desejada</p>
    </div>

    <ul v-if="$allFaqs" class="categories">
      <li class="category-item"
        v-for="faq in $allFaqs" 
        :key="faq.id" 
        @click="goToQuestions(faq)" 
      >
        <img :src="`@/assets/images/${faq.icon}`" :alt="faq.title" >
        <span>{{ faq.title }}</span>
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
  .faq {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    color: #fff;
  }
  .heading-image {
    display: grid;
    justify-content: center;
    grid-template-columns: 242px;
  }
  .heading-text {
    padding: 1.1rem 1.875rem 2.125rem;
  }
  .heading-text h1 {
    font-size: 1.25rem;
  }
  .heading-text p {
    margin-top: 0.222rem;
    font-size: 0.875rem;
  }
  .categories {   
    display: grid;
    grid-auto-rows: auto;
  }
  .category-item {
    color: #f5f6f8;
    padding: 1rem 1.875rem;
    transition: background-color .2s ease-in-out;
  }
  .category-item:hover {
    background-color: #3F4452;
  }
</style>