<template>
  <div>
      <h1>상세 페이지</h1>

      <div>
          <img :src="product.imageUrl" :alt="product.name">
          <p>상품 이름 : {{ product.name }}</p>
          <p>상품 가격 : {{ product.price }} $</p>
      </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index.js';

export default {

    async asyncData({ params }) {

        const response = await fetchProductById(params.id);

        const product = response.data;

        return { product }
    }, // asyncData({ params }) 끝
}
</script>

<style>

</style>