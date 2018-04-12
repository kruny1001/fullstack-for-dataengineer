import Vue from "vue";
import { VueEditor } from "vue2-editor";
// Vue.use(VueEditor);

const VueEditor2 = {
    install(Vue, options) {
      Vue.component('vue-editor', VueEditor)
    }
  };
Vue.use(VueEditor2);
export default VueEditor2;