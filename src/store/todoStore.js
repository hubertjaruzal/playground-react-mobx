import { autorun, observable } from 'mobx';

class TodoStore  {
  @observable list = [{id: 1, name: 'milk'}, {id: 2, name: 'eggs'}]
}

export default TodoStore;
