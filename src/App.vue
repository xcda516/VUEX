<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from "../components/productListOne";
import productListTwo from "../components/productListTwo";
export default {
  name: "app",
  data() {
    return {
      // products: [
      //   { name: "苹果", price: '$100' },
      //   { name: "华为", price: '$98' },
      //   { name: "小米", price: '$88' },
      //   { name: "oppo", price: '$85' },
      // ],
    };
  },
  components: {
    productListOne,
    productListTwo,
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
