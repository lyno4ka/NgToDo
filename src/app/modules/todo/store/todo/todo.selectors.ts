import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TODO_REDUCER_NODE, TodoState} from './todo.reducer';

export const todoFeatureASelector = createFeatureSelector<TodoState>(TODO_REDUCER_NODE);

export const todoListSelector = createSelector(
  todoFeatureASelector,
  state => state.todoList
);
