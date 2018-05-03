// eslint-disable-next-line
export default store => ({
  incrementCounter: async () => {
    store.counter += 1;
    return store.counter;
  },
});
