<template>
    <div class="search">
      <div class="header">Поиск сотрудников</div>
      <div class="field">
        <input type="text" v-model="searchValue" placeholder="Введите Id или имя" v-on:keyup.enter="onEnter" />
      </div>
      <div class="result-header">
        <div>Результаты</div>
      </div>
      <div class="results">
          <div class="not-found" v-if="isSearch && !allUsers.length">ничего не найдено</div>
          <div class="user" v-for="user in allUsers" :key="user.id" :data-id="user.id" @click="setUserId">
            <div class="img"></div>
            <div class="wrapper">
              <div class="username">{{user.username}}</div>
              <div class="email">{{user.email}}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import './Search.scss';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'SearchComponent',
  computed: mapGetters(['allUsers']),
  data(){
    return {
      isSearch: false,
      searchValue: ''
    }
  },
  methods:{
    ...mapActions(['fetchUsers', 'setSelectedUserId', 'changeLoaderState']),
    async onEnter(event){
      const value = event.target.value.replace(/\s/g,'');
      if(!value){
        return;
      }
      this.isSearch = true;
      this.changeLoaderState();
      const params = value.replace(/\w+,?/g, function(subStr, index){
        subStr = subStr.replace(',','');
        if(index){
          return isNaN(subStr)?`&username=${subStr}`:`&id=${subStr}`;
        }
        return isNaN(subStr)?`?username=${subStr}`:`?id=${subStr}`;
      });
      await this.fetchUsers(params);
      this.changeLoaderState();
    },
    setUserId(event){
      const {id} = event.currentTarget.dataset,
            userList = document.querySelectorAll('.results .user');

      userList.forEach(element=>{
        element.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      this.setSelectedUserId(+id);
    }
  }
}
</script>