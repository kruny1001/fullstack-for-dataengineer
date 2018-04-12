<template>
  <div class="sans-serif">
    <header-menu></header-menu>
    <section class="mv2 w-70 center">
      <section class="tc center mv5 ph3">
        <h2>퀴즈를 만드실수 있습니다.</h2>
        <hr class="mv3" />
        <small class="f6 lh-copy black-60 db mb2"> 새로운 퀴즈를 만들기 위해 
          아래의 폼을 작성 해주세요
        </small>
      </section>
      
      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">1. 퀴즈 제목</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <input v-model="quizTemplate.title" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" id="title" aria-describedby="password-desc">
      </section>

      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">2. 퀴즈내용</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <vue-editor v-model="quizTemplate.content"></vue-editor>
      </section>

      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">3. 퀴즈타입</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <input type="radio" id="one" value="binary" v-model="quizTemplate.type">
        <label for="one">바이너리버튼</label>
        <br>
        <input type="radio" id="two" value="radio" v-model="quizTemplate.type">
        <label for="two">레이디오버튼</label>
        <br>
        <input type="radio" id="three" value="check" v-model="quizTemplate.type">
        <label for="two">체크박스</label>
        <br>
        <span>Picked: {{ quizTemplate.type }}</span>
      </section>

      <section>
        <h4> Option 생성 </h4>
        <div v-if="quizTemplate.type == 'radio'">
          <label for="password" class="f6 b db mb2">4. Radio Option</label>
          <small class="f6 lh-copy black-60 db mb2">Radio 옵션 생성</small>
          <input v-model="tempOption" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" id="options" aria-describedby="password-desc">
          <button @click="addOption()"> Add option </button>
          <ul>
            <li v-for="(option, idx) in quizTemplate.options" :key="idx">{{option}}</li>
          </ul>
        </div>
        <div v-if="quizTemplate.type == 'check'">
          <label for="password" class="f6 b db mb2">4. Checkbox Option</label>
          <small class="f6 lh-copy black-60 db mb2">Checkbox 옵션 생성</small>
          <ul> 
            <li></li>
          </ul>
        </div>
      </section>

      <section class="mv2 measure-wide">
        <button> 새로 만들기</button>
      </section>
      <hr />
      <button class="mv2" @click="createQuiz()">New Quiz</button>
    </section>
    
    <!-- <ul class="list pa2">
      <li class="mv3 ph2" v-for="(item, idx) in quizs" :key="idx">
        {{item.title}}
      </li>
    </ul> -->

    <!-- <h3> Top Stories</h3>
    <Items></Items> -->

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
    "quizs"
  ]),
  async fetch({ store }) {
    await store.dispatch("LOAD_QUIZS", "topstories.json")
  },
  data() {
    return {
      id: "",
      tempOption: "",
      quizTemplate: {
        title: "",
        content: "",
        type: "",
        options: []
      },
      product: { id: "" }
    }
  },
  methods: {
    ...mapActions(['CREATE_QUIZ']),
    // increment() {
    //   this.$store.commit('increment')
    // }
    addOption(){
      var vm = this
      vm.quizTemplate.options.push(vm.tempOption)
      vm.tempOption = ''
    },
    createQuiz() {
      this.CREATE_QUIZ(this.quizTemplate)
      this.quizTemplate = {
        title: "",
        content: "",
        type: "",
        options: []
      }
      console.log("success")
    }
  },
  mounted() {
    var vm = this
  }
}
</script>