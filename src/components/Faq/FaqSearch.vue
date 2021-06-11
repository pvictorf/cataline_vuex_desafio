<template>
  <div class="faq-search">
    <div class="heading">
      <div class="btn-arrow" @click="goBack()">
        <img src="@/assets/images/arrow-left.svg" alt="voltar" />
      </div>
      <input
        class="search"
        v-model="search"
        ref="inputsearch"
        placeholder="Digite aqui"
      />
    </div>
    <div class="heading-image">
      <img src="@/assets/images/astronaut.svg" alt="Astronout" />
    </div>
    <div class="heading-text">
      <h1>Buscar tópicos</h1>
      <p>Encontre sua dúvida</p>
    </div>
    <ul v-if="$faqs" class="question">
      <div v-for="faq in $faqs" :key="faq.id">
        <li class="question-item"
          v-for="question in faq.questions"
          :key="question.id"
          @click="goToAnwser(question)"
        >
          <span>{{ question.title }}</span>
        </li>
      </div>
    </ul>
  </div>

</template>

<script>
export default {
  mounted() {
    const lastSearch = this.$store.getters.$getLastSearch;
    if(lastSearch) { this.search = lastSearch }
    this.$refs.inputsearch.focus()
  },
  data() {
    return { search: '' }
  },
  computed: {
    $faqs() {
      return this.$store.getters.$findFaqsBySearch(this.search)
    },
  }, 
  methods: {
    goToAnwser(question) {
      this.$store.commit('SET_LAST_SEARCH', this.search)
      this.$store.dispatch('goTo', { page: 'FaqAnswer' })
      this.$store.dispatch('selectQuestion', question)
    },
    goBack() {
      this.$store.dispatch('goBack', { page: 'Faq' })
    }
  }
}
</script>

<style scoped>
.faq-search {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  color: #fff;
}
.heading {
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 0.375rem;
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
.search {
  width: 100%;
  border-radius: 8px;
  border: none;
  text-indent: 1rem;
  font-size: 0.95rem;
  padding: 0.222rem;
  background: #23242a;
  color: #22e0db;
  outline: none;
}
.heading-search {
  display: grid;
  grid: 24px 24px;
  justify-content: end;
  padding: 0 1rem;
  cursor: pointer;
}
.heading-image {
  display: grid;
  justify-content: center;
  grid-template-columns: 234px;
}
.heading-text {
  padding: 1.1rem 1.1rem 1.1rem;
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
  grid-auto-rows: auto;
  overflow-y: scroll;
  max-height: 190px;
}
.question::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    border-radius: 5px;
    background: #26282C;
}
.question::-webkit-scrollbar-thumb {
    background: #1f1f1f;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}
.question::-webkit-scrollbar-corner {
    background: #000;
}
.question-item {
  font-size: 0.875rem;
  color: #f5f6f8;
  padding: 1rem 1rem;
  transition: background-color .2s ease-in-out;
}
.question-item:hover {
  background-color: #26282C;
}
</style>