const TodoStatus = {
  Pending: 'Pending',
  Done: 'Done',
};

export default ({ storage, currentDate }) => ({
  insert: async ({ text, userId }) => {
    const nextNumber = storage.configs.getNextNumber();
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
  list: async ({ userId }) => {
    return storage.todos.list({ userId });
  },
  finish: async ({ userId, id }) => {
    const params = {
      updatedAt: currentDate(),
      finishedAt: currentDate(),
      status: TodoStatus.Done,
    };

    return storage.todos.update(id, params);
  },
  get: async ({ userId }) => {
    return storage.todos.list({ userId });
  },
});
