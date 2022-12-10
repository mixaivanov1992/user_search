export default {
    state () {
      return {
        users: [],
        selectedUserId: 0
      }
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        selectedUser(state) {
            const {users, selectedUserId} = state;
            return users.filter(element=>element.id === selectedUserId);
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },
        setSelectedUser(state, id) {
            state.selectedUserId = id;
        }
    },
    actions: {
        async fetchUsers(context, params) {
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/users${params}`);
                const users = await res.json();
                context.commit('updateUsers', users);
            }catch(e){
                alert(e);
            }
        },
        setSelectedUserId(context, id) {
            context.commit('setSelectedUser', id);
        }
    }
}