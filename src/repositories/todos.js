export default store => ({
  insert: async (todo) => {
    store.push(todo);
    return todo;
  },
});

