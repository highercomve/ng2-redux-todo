import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MainComponent } from '../app/main.component';

beforeEachProviders(() => [MainComponent]);

describe('App: Ng2ReduxTodo', () => {
  it('should create the app',
      inject([MainComponent], (app: MainComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-redux-todo works!\'',
      inject([MainComponent], (app: MainComponent) => {
    expect(app.title).toEqual('ng2-redux-todo works!');
  }));
});
