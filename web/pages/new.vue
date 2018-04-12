<template>
  <div class="sans-serif">

    <section class="flex ph3 pv1 bg-orange white">
      <nuxt-link class="mh2" to="/">
        <div class="code link f5">홈</div>
      </nuxt-link>
      <nuxt-link class="mh2" to="/newquiz">
        <div class="code link f5">퀴즈 새로 만들기</div>
      </nuxt-link>
      <nuxt-link class="mh2" to="/quizs">
        <div class="code link f5">퀴즈페이지 가기</div>
      </nuxt-link>
      <nuxt-link class="mh2" to="/quiz-results">
        <div class="code link f5">퀴즈 결과</div>
      </nuxt-link>
    </section>

    <section class="mv2 w-70 center">

      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">1. 퀴즈 제목</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <input v-model="title" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" id="title" aria-describedby="password-desc">

      </section>

      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">2. 퀴즈내용</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <vue-editor v-model="content"></vue-editor>
      </section>

      <section class="mv2 ph3 measure-wide">
        <label for="password" class="f6 b db mb2">3. 퀴즈타입</label>
        <small class="f6 lh-copy black-60 db mb2">
          퀴즈의 타이틀을 적어주세요
        </small>
        <input type="radio" id="one" value="binary" v-model="type">
        <label for="one">바이너리버튼</label>
        <br>
        <input type="radio" id="two" value="radio" v-model="type">
        <label for="two">레이디오버튼</label>
        <br>
        <input type="radio" id="three" value="check" v-model="type">
        <label for="two">체크박스</label>
        <br>
        <span>Picked: {{ type }}</span>
      </section>

      <section class="mv2 ph3 measure-wide">
        <button> 새로 만들기</button>
      </section>

    </section>
    <!-- <ul>
        <li v-for="user in users" :key="user.id">{{user.login}}</li>
      </ul> -->

    <h1>New</h1>
    <Items></Items>

    <!-- <ul class="list pa2">
      <li class="mv3 ph2" v-for="item in items" :key="item.id">
        {{item.title}}
      </li>
    </ul> -->
  </div>
</template>

<script>
// import {database, storage} from '~/plugins/fbConn'
// import { mapState, mapActions } from 'vuex'
import { mapState } from "vuex"
import _ from 'lodash'
import Items from "~/components/Items.vue"

export default {
  components: {
    Items
  },
  async fetch({ store }) {
    await store.dispatch("LOAD_ITEMS", "newstories.json")
  },

  data() {
    return {
      id: "",
      type: "",
      title: "",
      content: "",
      product: { id: "" },
      product: { id: "" }
    }
  },
  
  methods: {
    // ...mapActions(['increment']),
    // increment() {
    //   this.$store.commit('increment')
    // }
  },

  mounted() {
    var vm = this
    // var quizRef = database.ref('tutorial/quiz')
    //   bblColors.on('value', (snap) => {
    //     var target = snap.val()
    //     console.log(target)
    //     if (target) {
    //       vm.product = _.assign({}, vm.product, target);
    //     }
    // })
  }
}
</script>