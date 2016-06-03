import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2ReduxTodoAppComponent } from '../app/ng2-redux-todo.component';

beforeEachProviders(() => [Ng2ReduxTodoAppComponent]);

describe('App: Ng2ReduxTodo', () => {
  it('should create the app',
      inject([Ng2ReduxTodoAppComponent], (app: Ng2ReduxTodoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-redux-todo works!\'',
      inject([Ng2ReduxTodoAppComponent], (app: Ng2ReduxTodoAppComponent) => {
    expect(app.title).toEqual('ng2-redux-todo works!');
  }));
});
