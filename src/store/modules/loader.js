export default {
    state () {
      return {
        loader: false
      }
    },
    getters: {
        getLoaderState(state) {
            return state.loader;
        }
    },
    mutations: {
        updateLoader(state) {
            state.loader = !state.loader;
        }
    },
    actions: {
        changeLoaderState(context) {
            context.commit('updateLoader');
        }
    }
}