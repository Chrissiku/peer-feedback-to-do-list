const PrintTasks = require('../modules/allFunctionalies.js');
const newList = require('../__mocks__/storage.js');

document.body.innerHTML = `
<div class="entry-line title-list">
  <p>Today's ToDo List</p>
  <button type="button" class="list-btn">
    <i class="fa-solid fa-arrows-rotate"></i>
  </button>
</div>
<div class="entry-line">
  <form id="add-task-form">
    <input class="input-new-task" required placeholder="Add to your list.." />
    <button type="submit" class="list-btn add-task-btn">
      <i class="fa-solid fa-plus"></i>
    </button>
  </form>
</div>
<div id="tasks-div">
</div>
<div class="entry-line clear-task-line">
  <button id="remove-completed-btn" type="button">Clear all completed</button>
</div>
`;

describe('add and remove', () => {
  global.localStorage = newList;

  test('Add task', () => {
    const todoList = new PrintTasks();
    const newTodo = {
      id: '1',
      description: 'task1',
      completed: false,
      index: 1,
    };

    todoList.add(newTodo);
    expect(todoList.tasksCollection).toHaveLength(1);

    // storage mocked data
    const storedData = JSON.parse(localStorage.getItem('tasks'));
    expect(storedData).not.toBe(null);
    expect(localStorage).toHaveLength(1);
    expect(storedData[0].description).toBe('task1');
  });

  test('remove task', () => {
    const todoList = new PrintTasks();
    const newTodoList1 = {
      id: '2',
      description: 'task2',
      completed: false,
      index: 2,
    };
    todoList.add(newTodoList1);
    todoList.remove(newTodoList1.id);
    expect(todoList.tasksCollection[0].description).toBe('task1');
    expect(todoList.tasksCollection).toHaveLength(1);
  });
});

describe('Edit test', () => {
  test('Editing', () => {
    const todoList = new PrintTasks();
    const newTodoList2 = {
      id: '2',
      description: 'task33',
      completed: false,
      index: 2,
    };
    todoList.add(newTodoList2);
    todoList.update(newTodoList2.id, 'asd');
    expect(todoList.tasksCollection[1].description).toBe('asd');
    expect(todoList.tasksCollection).toHaveLength(2);
  });
});

describe('complete test', () => {
  test(' updating an item completed status', () => {
    const todoList = new PrintTasks();
    const newTodoList3 = {
      id: '3',
      descrition: 'task5',
      completed: false,
      index: 3,
    };
    todoList.add(newTodoList3);
    todoList.changeStatus(newTodoList3.id, true);
    expect(todoList.tasksCollection[2].completed).toBeTruthy();
    expect(todoList.tasksCollection).toHaveLength(3);
  });
});

describe('Clear all completed', () => {
  test('Clear completed items', () => {
    const todoList = new PrintTasks();
    todoList.removeCompletedTasks();
    expect(todoList.tasksCollection).toHaveLength(2);
    expect(todoList.tasksCollection[1].completed).toBeFalsy();
  });
});
