<template>
  <div class="sans-serif">
    <header-menu></header-menu>
    <section class="mv2 w-70 center">
      <section class="mv2 center ph3">
        <section class="tc center mv5 ph3 measure-wide">
          <h2>설문 조사</h2>
          <hr class="mv3" />
          <small class="f6 lh-copy black-60 db mb2"> 
            안녕하세요! 
            강의에 참석해주신 분들께 감사의 인삿말 드립니다. <br />
            강의 이전에 설문조사를 하려고 합니다. 꼭 부탁드립니다.
          </small>
        </section>

        <!-- 퀴즈 컨텐츠 -->
        <ul class="list pa2">
          <li class="ba pa2 mv3 ph2" v-for="(item, idx) in quizs" :key="idx">
            <h4>{{item.title}}</h4>
            <div class="code" v-html="item.content"></div>
            <div v-if="item.type == 'binary' ">
              <button> Yes </button>
              <button> No </button>
            </div>
            <ul class="list ph0">
              <li class="mh2" v-for="(option, idx) in item.options" :key="idx">
                <button class="pa3">{{option}}</button>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
import { database, storage } from '~/plugins/fbConn'
import { mapState, mapActions } from "vuex"
import _ from 'lodash'

import HeaderMenu from "~/components/HeaderMenu.vue"
import Items from "~/components/Items.vue"

export default {
  components: {
    Items,
    HeaderMenu
  },
  computed: mapState([
    // "users",
    // "ids",
    "quizs"
  ]),
    async fetch({ store }) {
      // await store.dispatch("LOAD_QUIZS", "topstories.json")
    },
  data() {
    return {
      //   id: "",
      //   quizTemplate: {
      //     title: "",
      //     content: "",
      //     type: "",
      //   },
      //   product: { id: "" }
    }
  },
  methods: {
    ...mapActions(['CREATE_QUIZ']),
    // increment() {
    //   this.$store.commit('increment')
    // }
    createQuiz() {
      this.CREATE_QUIZ(this.quizTemplate)
      this.quizTemplate = {
        title: "",
        content: "",
        type: "",
      }
      console.log("success")
    }
  },
  mounted() {
    var vm = this
  }
}
</script>