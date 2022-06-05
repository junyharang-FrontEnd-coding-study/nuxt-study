// state는 Vuex에서 가장 기본적인 요소 중 하나이고, 각각의 Component들 안에는 data() 속성이 있는데,
// 그 data()가 여러 Component와 Data를 공유해야 될 때, state라는 Vuex를 이용한다.
import {fetchCartItems} from "~/api";

// 상수형 변수(Constants)
export const FETCH_CART_ITEMS = 'fetchCartItems';

// store
export const state = () => ({
  // Main Page와 상세 Page에서 서로 공유해야 하는 Data를 정의
  cartItems : [],
}) // state 끝

// Mutations는 State의 값을 변경하는데 사용
export const mutations = {
  addCartItem(state, cartItem) {
    // CartItem의 Image Url 변경
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    } // newCartItem 끝
    state.cartItems.push(newCartItem);
  }, // addCartItem() 끝

  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  }, // setCartItems(state, cartItems)
} // mutations 끝

export const actions = {
  async [FETCH_CART_ITEMS] ({ commit }) {
    const { data } = await fetchCartItems();

    // commit으로 state에 cartItems[]에 넣어줘야 한다.
    commit('setCartItems', data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    })));

    console.log("장바구니 API를 통한 목록 조회 API 응답값 :");
    console.log(data);
  }, // [FETCH_CART_ITEMS] ({ commit }) 끝

  // nuxtServerInit은 따로 호출하지 않아도 되고, 자동으로 호출되게 설계 되어 있다.
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS);
  // }, // nuxtServerInit() 끝
} // actions 끝
