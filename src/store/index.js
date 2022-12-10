import { createStore } from 'vuex';
import user from './modules/user';
import loader from './modules/loader';

export default createStore({
  modules:{
    user,
    loader
  }
});