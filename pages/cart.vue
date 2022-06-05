<template>
  <div class="container">
    <h1 class="list-title">Cart Page</h1>
    <CartList></CartList>

    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
// import {FETCH_CART_ITEMS} from '@/store/index.js'

import CartList from "~/components/CartList";

export default {
  components: { CartList },
  /*
  async asyncData({ store }) {
    store/index.js에 actions에 선언한 함수명을 아래에 dispatch() 괄호 안에 문자열로 적어줘야 Error가 나지 않으며,
    이렇게 하지 않았을 경우 [vuex] expec끝s string as the type, but found undefined. Error 발생
    await store.dispatch(FETCH_CART_ITEMS);
  }, // asyncData({ store }) 끝
}
*/

}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
