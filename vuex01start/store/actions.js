export default {
    login(context) {
        setTimeout(function () {
            context.commit('login', { isAuth: true })
        }, 500);
    },
    logout(context) {
        context.commit('logout', { isAuth: false })
    }
}