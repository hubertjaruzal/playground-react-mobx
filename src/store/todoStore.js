import { autorun, observable, computed } from 'mobx';

class TodoStore  {
  @observable list = [{id: 1, name: 'milk'}, {id: 2, name: 'eggs'}]
  @observable filter = '';

  addTodo = (value, list) => {
    list.push({id: (list.length + 1), name: value})
  }

  @computed get filterTodoList() {
    let matchesFilter = new RegExp(this.filter, 'i');
    return this.list.filter((todo) => !this.filter || matchesFilter.test(todo.name));
  }
}

export default TodoStore;
