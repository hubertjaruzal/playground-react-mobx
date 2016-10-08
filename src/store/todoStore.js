import { autorun, observable } from 'mobx';

class TodoStore  {
  @observable list = [{id: 1, name: 'milk'}, {id: 2, name: 'eggs'}]

  addTodo = (value, list) => {
    list.push({id: (list.length + 1), name: value})
  }
}

export default TodoStore;
