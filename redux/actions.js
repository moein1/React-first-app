const constantas = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    CREATE_USER_ID: 'CREATE_USER_ID'
}
let actions = {
    addTodo: function(text) {
        return {
            type: constantas.ADD_TODO,
            text: text
        }
    },
    completeTodo: function(id) {
        return {
            type: constantas.COMPLETE_TODO,
            id: id
        }
    },
    deleteTodo: function(id) {
        return {
            type: constantas.DELETE_TODO,
            id: id
        }
    },
    createNewUserId: function() {
        return {
            type: constantas.CREATE_USER_ID,
            id: Math.ceil(Math.random() * 100)
        }
    },
    createNewUserIfOdd: function() {
        return (dispath, getState) => {
            const { user } = getState();
            if (user.id % 2 === 0) {
                return;
            }
            dispath(actions.createNewUserId());
        }
    }
   , createNewUserIdAsync: function() {
        return (dispath) => {
            setTimeout(() => {
                dispath(actions.createNewUserId())
            }, 2000);
        }
    }
}
export default actions;