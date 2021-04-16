<template>
  <div id="productListOne">
    <h1>productListOne</h1>
    <div>
      <ul>
        <li v-for="(item, index) in discountProducts" :key="index">
          <span>{{ item.name }}</span
          >${{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "one",
  //   data() {
  //     return {
  //     };
  //   },
  //   props: ["products"],
  computed: {
    // products() {
    //   return this.$store.state.products;
    // },
    // discountProducts() {
    //     return this.$store.getters.discountProducts
    // },
    ...mapGetters(['discountProducts'])
  },
};
</script>

<style scoped>
#productListOne {
  background: #8e44ad;
  padding: 50px;
}
#productListOne ul {
  display: flex;
}
#productListOne li {
  width: 200px;
  height: 40px;
  background: #27ae60;
  text-align: center;
  line-height: 40px;
  color: #c0392b;
  margin: 0 30px;
}
#productListOne li span {
  color: #fff;
  margin-right: 15px;
}
</style>
