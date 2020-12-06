import {Action} from '@ngrx/store';

export enum todoActionsType {
  create = '[TODO] create todo item',
  toggle = '[TODO] toggle todo item',
  edit = '[TODO] edit todo item',
  delete = '[TODO] delete todo item',
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

export type TodoActions = TodoCreateActions | TodoDeleteActions | TodoToggleActions | TodoEditActions;
