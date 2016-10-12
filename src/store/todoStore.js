import { autorun, observable, computed } from 'mobx';

class TodoStore  {
  @observable list = [{id: 1, name: 'milk', done: false}, {id: 2, name: 'eggs', done: true}]
  @observable filter = '';

  addTodo = (value, list) => {
    list.push({id: (list.length + 1), name: value, done: false})
  }

  removeDoneTodo = (list) => {
    list.replace(list.filter(object => object.done !== true))
  }

  @computed get filterTodoList() {
    let matchesFilter = new RegExp(this.filter, 'i');
    return this.list.filter((todo) => !this.filter || matchesFilter.test(todo.name));
  }
}

export default TodoStore;
