export default {
    isAuth(state) {
        return state.isLoggedIn
    },
    products(state) {
        return state.products
    },
    cart(state) {
        return state.cart
    }

}