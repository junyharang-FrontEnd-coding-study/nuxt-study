<template>
  <div>
      <h1>주니하랑의 Nuxt.js 여행기 Main Page</h1>

      <div>
        <h3>Back End Response Data</h3>

        <ProductList></ProductList>
      </div>
  </div>
</template>

<script>
// import axios from "axios";
import ProductList from "../components/ProductList.vue";

export default {
    components: { ProductList },

    // asyncData()는 data()와 created()보다 상위에 위치해야 한다.
    // async asyncData() {
    //     const response = await axios.get("http://localhost:3000/products");
    //     console.log("API 응답 값 : " + response.data.data);
    //     const products = response.data;
    //     return { products }; // { products : products } 축약
    // },

}
</script>

<style>

</style>