<template>
  <div>
    <section class="quiz">
      <quiz-body></quiz-body>
      <quiz-binary></quiz-binary>
    </section>

    <section class="quiz">
      <quiz-body></quiz-body>
      <quiz-check></quiz-check>
    </section>

    <section class="quiz">
      <quiz-body></quiz-body>
      <quiz-radio></quiz-radio>
    </section>

  </div>
</template>
<script>
import QuizBody from '~/components/quiz/QuizBody'
import QuizBinary from '~/components/quiz/QuizBinary'
import QuizCheck from '~/components/quiz/QuizCheck'
import QuizRadio from '~/components/quiz/QuizRadio'

export default {
  components: {
    QuizBody,
    QuizBinary,
    QuizCheck,
    QuizRadio
  }
}
</script>