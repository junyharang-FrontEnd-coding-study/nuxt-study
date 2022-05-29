<template>
  <div>

          <div class="container">
              
              <div class="container">
                  <img class="product-image" :src="product.imageUrl" :alt="product.name"/>
              </div>

              <dir class="side-panel">
                <p class="name">{{ product.name }}</p>

                <p class="price">{{ product.price }}$</p>

                <!-- <button type="button" @click="addToCart">Add to Cart</button> -->
              </dir>
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

<style scoped>

.container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}/* .container 끝  */

.product-image {
    width: 500px;
    height: 375px;
} /* .product-image 끝 */

.side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
} /* .side-panel 끝 */

</style>