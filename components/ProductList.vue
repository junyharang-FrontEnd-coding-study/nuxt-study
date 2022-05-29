<template>
  <div>
      {{ products }}
  </div>
</template>

<script>
import axios from "axios";

export default {

    async asyncData() {

        console.log("asyncData Error 발생");

        const response = await axios.get("http://localhost:3000/products");
        console.log("API 응답 값 : " + response.data.data);
        const products = response.data;
        return { products }; // { products : products } 축약
    },

}
</script>

<style>

</style>