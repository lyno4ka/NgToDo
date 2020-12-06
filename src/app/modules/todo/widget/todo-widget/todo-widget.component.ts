import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodoState} from '../../store/todo/todo.reducer';
import {TodoCreateActions, TodoDeleteActions, TodoEditActions, TodoToggleActions} from '../../store/todo/todo.actions';
import {Todo} from '../../model/todo';
import {todoListSelector} from '../../store/todo/todo.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateActions({name}));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteActions({id}));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleActions({id}));
  }

  onEdit({ id, name}) {
    this.store$.dispatch(new TodoEditActions({id, name}));
  }
}
