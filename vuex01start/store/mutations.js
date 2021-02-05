export default {
    login(state, payload) {
        state.auth = payload.isAuth;
        console.log(state.auth);
    },
    logout(state, payload) {
        state.auth = payload.isAuth;
        console.log(state.auth);
    },
}