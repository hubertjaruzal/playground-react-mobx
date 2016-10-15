import { autorun, observable, computed } from 'mobx';

class TodoStore  {
  @observable list = localStorage.List ? JSON.parse(localStorage.List) : []
  @observable filter = '';

  addTodo = (value, list) => {
    list.push({id: Date.now(), name: value, done: false})
    localStorage.setItem('List', JSON.stringify(list))
  }

  removeDoneTodo = (list) => {
    list.replace(list.filter(object => object.done !== true))
    localStorage.setItem('List', JSON.stringify(list))
  }

  @computed get filterTodoList() {
    let matchesFilter = new RegExp(this.filter, 'i');
    return this.list.filter((todo) => !this.filter || matchesFilter.test(todo.name));
  }
}

export default TodoStore;
