<template>
  <div class="container">
    <transition class="slide" :name="$transition" mode="out-in">
      <component :is="$currentPage" />
    </transition>
  </div>
</template> 

<script>
import Faq from '@/components/Faq/Faq.vue'
import FaqQuestion from '@/components/Faq/FaqQuestion.vue'
import FaqAnswer from '@/components/Faq/FaqAnswer.vue'
import FaqSearch from '@/components/Faq/FaqSearch.vue'

export default {
  name: 'App',
  components: { Faq, FaqQuestion, FaqAnswer, FaqSearch },
  created() {
    this.$store.dispatch('fetchFaqs')
  },
  computed: {
    $currentPage() {
      return this.$store.getters.$getCurrentPage
    },
    $transition() {
      return this.$store.getters.$getTransition
    }
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 29.9rem;
  justify-content: center;
  align-content: center;
  background: #f5f6f8;
  height: 100vh;
}
.container {
  padding: 2rem .375rem;
  padding-bottom: .875rem;
  background-image: linear-gradient(180deg,#3f4452,#26282c);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
  overflow: hidden;
  position: relative;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.25s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(1.5em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-1.5em, 0);
}

.slide-right-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}

.slide-left-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
