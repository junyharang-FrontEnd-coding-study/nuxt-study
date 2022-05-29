<template>
  <div class="app">
    <main>
        <div>
          <input type="text" />
        </div>
          <div>
            <ul>
              <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
                <img class="product-image" :src="product.imageUrl" :alt="product.name" />
                <p>{{ product.name }}</p>
                <span>{{ product.price }} $</span>
              </li>
            </ul>
          </div>
      </main>
    </div>

</template>

<script>
import axios from "axios";

export default {

    // asyncData()는 data()와 created()보다 상위에 위치해야 한다.
    async asyncData() {
        const response = await axios.get("http://localhost:3000/products");

        console.log("API 응답 값 : " + response.data);

        // 응답으로 들어온 Data 각각의 배열 요소를 변환하기 위해 map()을 추가
        // const products = response.data.map((item) => {
          
        //   return {  // 반환 값으로 새 객체를 넘겨준다.
          
        //   // 인자값으로 입력된 item에 들어있는 id, name, image, price 정보를 풀어 객체에 저장(Key : Value)하기 위해 아래와 같이 선언
        //   ...item,

        //   // 사진 URL을 덮어쓰기 위해 아래와 같이 입력
        //   iamgeUrl : `${item.iamgeUrl}?random=${Math.random()}`,

        //   }
        // }); // const products = response.data.map((item) 끝

        // 32 ~ 44 내용 축약
        const products = response.data.map((item) => ({

          ...item,

          imageUrl: `${item.imageUrl}?random=${Math.random()}`,

        }));  // const products = response.data.map((item) 끝

        return { products }; // { products : products } 축약
    }, // asyncData() 끝

    methods : {

      moveToDetailPage(id) {

        console.log("moveToDetailPage(id)가 호출 되었습니다! 상품 ID 값 : " + id);

        this.$router.push(`detail/${id}`);

      }, // moveToDetailPage() 끝

    }, // methods 끝

}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>