import { assert } from 'chai';

import createTodoService from '../services/todo';
import createTodoRepository from '../repositories/todos';

let fakeTodoStore = [];

const currentDate = new Date();
const todoService = createTodoService({
  currentDate: () => currentDate,
  storage: {
    todos: createTodoRepository(fakeTodoStore),
  },
});

describe('TodoService', () => {
  beforeEach(() => { fakeTodoStore = []; });

  describe('#create', () => {
    it('Should fail if no text is given');
    it('Should be able to create a task', async () => {
      const todo = await todoService.insert({ text: 'my first todo' });
      assert.equal(todo.id, 1);
      assert.equal(todo.status, 'Pending');
      assert.deepEqual(todo.createdAt, currentDate);
    });
  });
  describe('#list', () => {
    it('Should list all the tasks for an user');
    it('Should filter by status');
  });
  describe('#finish', () => {
    it('Should fail if no task# is given');
    it('Should fail if no task# doesnt exist');
    it('Should fail if trying to close someone elses task');
    it('Should mark a task as finished');
  });
});
