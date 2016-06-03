import { Ng2ReduxTodoPage } from './app.po';

describe('ng2-redux-todo App', function() {
  let page: Ng2ReduxTodoPage;

  beforeEach(() => {
    page = new Ng2ReduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-redux-todo works!');
  });
});
