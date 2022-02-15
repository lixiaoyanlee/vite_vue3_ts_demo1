import { ref, defineComponent } from "vue";
import classes from "./index.module.scss";

export default defineComponent({
  name: "Comp",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: props => {
    const count = ref(0);
    return () => (
      <div class={classes.helloWorld}>
        <h1>{props.msg}</h1>
        <button
          onClick={() => {
            count.value++;
          }}
        >
         tsx 组件 count is: {count.value}
        </button>
      </div>
    );
  },
});
