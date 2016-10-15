import { autorun, observable, computed, action } from 'mobx';

class TodoStore  {
  @observable list = localStorage.List ? JSON.parse(localStorage.List) : [];
  @observable filter = '';

  setList = (list) => {
    localStorage.setItem('List', JSON.stringify(list));
  }

  @action addTodo = (value, list) => {
    list.push({id: Date.now(), name: value, done: false});
    this.setList(list);
  }

  @action removeDoneTodo = (list) => {
    list.replace(list.filter(object => object.done !== true));
    this.setList(list);
  }

  @action clearTodos = (list) => {
    list.clear();
    this.setList(list);
  }

  @computed get filterTodoList() {
    let matchesFilter = new RegExp(this.filter, 'i');
    return this.list.filter((todo) => !this.filter || matchesFilter.test(todo.name));
  }
}

export default TodoStore;
