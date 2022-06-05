<template>
  <div>

          <div class="container">

              <div class="main-panel">
                  <img class="product-image"
                       :src="product.imageUrl"
                       :alt="product.name"/>
              </div>

              <div class="side-panel">
                <p class="name">{{ product.name }}</p>

                <p class="price">{{ product.price }}$</p>

                <button type="button" @click="addToCart">장바구니에 담기</button>
              </div>
          </div>
      </div>
</template>

<script>
import {createCartItem, fetchProductById} from '@/api/index.js';

export default {

    async asyncData({ params }) {

        const response = await fetchProductById(params.id);

        const product = response.data;

        return { product }
    }, // asyncData({ params }) 끝

  methods: {

      async addToCart() {

        // API를 이용하여 Data를 저장하기 위한 Code
        const response = await createCartItem(this.product);
        console.log("Cart 저장을 위한 API 응답 결과 :");
        console.log(response);

        // /store/index.js를 만드는 순간 단순히 Library에 설치 및 설정하는 코드만 작성해 주는 것 뿐만 아니라
        // 객체(인스턴스) 내부적으로 연결을 해주기 때문에 this를 통해 $store commit()이라는 것을 접근할 수 있게 된다.
        this.$store.commit('addCartItem', this.product);  // mutations에 addCartItem()을 호출하는데, 장바구니에 담을 객체(this.product)를 매개 변수로 전달해 준다.

        await this.$router.push('/cart');
      }, // addToCart() 끝
  }, // methods 끝
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
