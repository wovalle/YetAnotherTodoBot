export default store => ({
  insert: async (todo) => {
    store.push(todo);
    return todo;
  },
  list: async ({ userId }) => {
    return store.filter(t => t.userId === userId);
  },
  update: async (id, params) => {
    const index = store.findIndex(g => g.id === id);
    const todo = { id, ...store[index], ...params };
    store[index] = todo;
    return todo;
  },
});

