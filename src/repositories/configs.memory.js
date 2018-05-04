/* eslint-disable no-param-reassign */
export default store => ({
  incrementCounter: async () => {
    store.counter += 1;
    return store.counter;
  },
});
