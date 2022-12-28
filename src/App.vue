<template>
  <Header></Header>
  <Container></Container>
  <Loader v-if="getLoaderState"></Loader>
</template>

<script>
import {mapGetters} from 'vuex';
import Header from './components/Header/Header.vue';
import Container from './components/Container/Container.vue';
import Loader from './components/Loader/Loader.vue';

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Loader
  },
  computed: mapGetters(['getLoaderState'])
}
</script>
