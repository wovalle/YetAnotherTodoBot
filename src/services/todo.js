const TodoStatus = {
  Pending: 'Pending',
  Done: 'Done',
};

export default ({ storage, currentDate }) => ({
  insert: async ({ text, userId }) => {
    const nextNumber = await storage.configs.incrementCounter();
    const createdAt = currentDate();

    const todo = {
      id: nextNumber,
      userId,
      createdAt,
      status: TodoStatus.Pending,
      text,
    };

    await storage.todos.insert(todo);
    return todo;
  },
  list: async ({ userId }) => storage.todos.list({ userId }),
  finish: async ({ id }) => {
    const params = {
      updatedAt: currentDate(),
      finishedAt: currentDate(),
      status: TodoStatus.Done,
    };

    return storage.todos.update(id, params);
  },
  get: async ({ userId }) => storage.todos.list({ userId }),
});
