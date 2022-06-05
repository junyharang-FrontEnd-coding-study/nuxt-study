<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cartItem in $store.state.cartItems"
          :key="cartItem.id" class="list-item">
        <img :src="cartItem.imageUrl"
             :alt="cartItem.name" class="thumbnail">

        <div class="description">
          <p>제품명 : {{ cartItem.name }}</p>
          <span>가격 : {{ cartItem.price }} $ </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {FETCH_CART_ITEMS} from "~/store";

export default {
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS);
  }, // fetch() 끝
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
