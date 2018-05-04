import { assert } from 'chai';

import createTodoService from '../services/todo';
import createTodoRepository from '../repositories/todos.memory';
import createConfigsRepository from '../repositories/configs.memory';

let fakeMemoryStore = {
  todos: [],
  configs: {
    counter: 0,
  },
};

const currentDate = new Date();
let todoService = {};

describe('TodoService', () => {
  beforeEach(() => {
    todoService = createTodoService({
      currentDate: () => currentDate,
      storage: {
        todos: createTodoRepository(fakeMemoryStore.todos),
        configs: createConfigsRepository(fakeMemoryStore.configs),
      },
    });

    fakeMemoryStore = { todos: [], configs: { counter: 0 } };
  });

  describe('#create', () => {
    it('Should fail if no text is given');
    it('Should fail if no userId is given');
    it('Should be able to create a todo', async () => {
      const todo = await todoService.insert({ text: 'my first todo', userId: 'wovalle' });
      assert.equal(todo.id, 1);
      assert.equal(todo.status, 'Pending');
      assert.deepEqual(todo.createdAt, currentDate);
      assert.deepEqual(todo.userId, 'wovalle');
    });
  });

  describe('#list', () => {
    it('Should fail if status is invalid');
    it('Should fail if user is invalid');
    it('Should fail if user asks for another user outside the group');
    it('Should fail if user asks for another users todos in private');

    it('Should list all the todos for an user', async () => {
      await todoService.insert({ text: 'todo1', userId: 'wovalle' });
      await todoService.insert({ text: 'todo2', userId: 'wovalle' });
      await todoService.insert({ text: 'todo3', userId: 'other' });

      const todos = await todoService.list({ userId: 'wovalle' });
      assert.equal(todos.length, 2);
    });

    it('Should filter by status');
  });
  describe('#finish', () => {
    it('Should fail if no todo# is given');
    it('Should fail if no todo# doesnt exist');
    it('Should fail if trying to close someone elses todo');
    it('Should mark a todo as finished', async () => {
      await todoService.insert({ text: 'todo2', userId: 'wovalle' });
      await todoService.finish({ id: 1 });
      const todos = await todoService.list({ userId: 'wovalle' });

      const finished = todos.find(t => t.text === 'todo2');

      assert.equal(finished.status, 'Done');
      assert.equal(finished.updatedAt, currentDate);
      assert.equal(finished.finishedAt, currentDate);
    });
  });
});
