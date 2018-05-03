const TodoStatus = {
  Pending: 'Pending',
  Done: 'Done',
};

export default ({ storage, currentDate }) => ({
  insert: async ({ text }) => {
    // const number = storage.sequence.getNext();
    const nextNumber = 1;
    const createdAt = currentDate();

    const todo = {
      id: nextNumber,
      createdAt,
      status: TodoStatus.Pending,
      text,
    };

    await storage.todos.insert(todo);

    return todo;
  },
});
