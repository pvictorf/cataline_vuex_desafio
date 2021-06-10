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

export default {
  name: 'App',
  components: { Faq, FaqQuestion, FaqAnswer },
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
  grid-template-rows: 458px;
  justify-content: center;
  align-content: center;
  height: 100vh;
}
.container {

  /* UI */
  background: transparent
    linear-gradient(180deg, #404451 0%, var(--unnamed-color-26282c) 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(180deg, #404451 0%, #26282c 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #3f445266;
  border-radius: 15px;
  opacity: 1;
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
