export class Ng2ReduxTodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-redux-todo-app h1')).getText();
  }
}
