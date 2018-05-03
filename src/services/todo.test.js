describe('TodoService', () => {
  describe('#create', () => {
    it('Should fail if no text is given');
    it('Should be able to create a task');
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
