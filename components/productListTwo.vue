<template>
  <div id="productListTwo">
    <h1>productListTwo</h1>
    <div>
      <ul>
        <li v-for="(item, index) in products" :key="index">
          <span>{{ item.name }}</span
          >${{ item.price }}
        </li>
      </ul>
      <button @click="fn">降价</button>
      <button @click="asyFn(5)">异步降价</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "two",
  data() {
    return {};
  },
  // props: {
  //   products:{},
  // },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    fn() {
      this.$store.commit("reductionPrice");
    },
    asyFn(step) {
      this.$store.dispatch("asyReductionPrice", step);
    },
    // ...mapActions(['asyFn']) 
  },
};
</script>

<style scoped>
#productListTwo {
  background: #2980b9;
  padding: 50px;
}
#productListTwo li {
  width: 200px;
  height: 40px;
  background: #e67e22;
  text-align: center;
  line-height: 40px;
  color: #c0392b;
  margin: 30px 0;
}
#productListTwo li span {
  color: #fff;
  margin-right: 15px;
}
</style>
