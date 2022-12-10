<template>
    <div class="container">
      <Search></Search>
      <Content></Content>
    </div>
</template>

<script>
import './Container.scss';
import Search from './Search/Search.vue';
import Content from './Content/Content.vue';

export default {
  name: 'ContainerComponent',
  components: {
    Search,
    Content
  }
}
</script>
