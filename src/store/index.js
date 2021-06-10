import { createStore } from 'vuex'
import { faqCategories } from '@/database/db.json'

export default createStore({
  state: {
    faqs: [],
    currentPage: 'Faq',
    transition: '',
    faq: {},
    question: {}
  },
  mutations: {
    SET_FAQS(state, faqs) {
      state.faqs = faqs
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    },
    SET_TRANSITION(state, transition) {
      state.transition = transition
    },
    SET_FAQ(state, faq) {
      state.faq = faq
    },
    SET_QUESTION(state, question) {
      state.question = question
    }
  },
  actions: {
    fetchFaqs(ctx) {
      const faqs = faqCategories
      ctx.commit('SET_FAQS', faqs)
    },
    selectFaq({commit}, faq) {
      commit('SET_FAQ', faq)
    },
    selectQuestion({commit}, question) {
      commit('SET_QUESTION', question)
    },
    goTo({ commit }, { page, transition = 'slide-left' }) {
      commit('SET_CURRENT_PAGE', page)
      commit('SET_TRANSITION', transition)
    },
    goBack({ commit }, { page, transition = 'slide-right' }) {
      commit('SET_CURRENT_PAGE', page)
      commit('SET_TRANSITION', transition)
    }
  },
  getters: {
    $allFaqs(state) {
      return state.faqs
    },
    $getCurrentPage(state) {
      return state.currentPage
    },
    $getTransition(state) {
      return state.transition
    },
    $getFaq(state) {
      return state.faq
    },
    $getQuestion(state) {
      return state.question
    }
  }
})
