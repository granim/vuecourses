export default {
    addProductToCart(context, payload) {
        context.commit('addProductToCart', payload)
    },
    removeProductFromCart(context, payload) {
        context.commit('removeProductFromCart', payload)
    },
    login(context) {

        context.commit('login')
    },
    logout(context) {

        context.commit('logout')
    }
}