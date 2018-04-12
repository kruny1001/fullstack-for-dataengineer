<template>
  <section class="container">
    <div>
      <h3> 퀴즈앱 예제 </h3>
      <p> 컴포넌트를 사용하여 퀴즈 앱을 만들어 보겠습니다. </p>

      <quiz></quiz>
      
      <!-- likes button -->
      <vote-btn></vote-btn>
      <vote-btn></vote-btn>
    </div>
  </section>
</template>

<script>
import VoteBtn from '~/components/VoteBtn'
import VoteLog from '~/components/VoteLog'
import VoteResult from '~/components/VoteResult'
import QuizBody from '~/components/quiz/QuizBody'
import QuizBinary from '~/components/quiz/QuizBinary'
import QuizCheck from '~/components/quiz/QuizCheck'
import QuizRadio from '~/components/quiz/QuizRadio'
import Quiz from '~/components/quiz/Quiz'

export default {
  components: {
    VoteBtn,
    VoteLog,
    Quiz,
    VoteResult,
    QuizBody,
    QuizBinary,
    QuizCheck,
    QuizRadio
  }
}
</script>
<style>
.quiz{
  height: 300px; 
  width: 500px; 
  border: 2px #35495e solid;
  padding: 10px; 
  margin: 10px;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
