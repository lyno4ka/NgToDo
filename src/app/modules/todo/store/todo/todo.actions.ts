import {Action} from '@ngrx/store';
import {TodoState} from './todo.reducer';

export enum todoActionsType {
  create = '[TODO] create todo item',
  toggle = '[TODO] toggle todo item',
  edit = '[TODO] edit todo item',
  delete = '[TODO] delete todo item',
  load = '[TODO] load todo state',
}

export class TodoCreateActions implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: {name: string}) {
  }
}

export class TodoToggleActions implements Action {
  readonly type = todoActionsType.toggle;
  constructor(public payload: {id: number}) {
  }
}

export class TodoEditActions implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: {id: number, name: string}) {
  }
}

export class TodoDeleteActions implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: {id: number}) {
  }
}

export class TodoLoadStateActions implements Action {
  readonly type = todoActionsType.load;
  constructor(public payload: {state: TodoState}) {
  }
}

export type TodoActions = TodoCreateActions | TodoDeleteActions | TodoToggleActions | TodoEditActions | TodoLoadStateActions;
