"use strict";

var ToDoItem = React.createClass({
  displayName: "ToDoItem",

  incrPrior: function incrPrior() {
    this.props.handler(this.props.content, 1);
  },
  decrPrior: function decrPrior() {
    this.props.handler(this.props.content, -1);
  },
  render: function render() {
    return React.createElement(
      "li",
      null,
      this.props.content,
      React.createElement(
        "a",
        { href: "#", onClick: this.incrPrior },
        React.createElement("i", { className: "fa fa-caret-square-o-up" })
      ),
      React.createElement(
        "a",
        { href: "#", onClick: this.decrPrior },
        React.createElement("i", { className: "fa fa-caret-square-o-down" })
      ),
      "(",
      this.props.prior,
      ")"
    );
  }
});
// babel src --out-file build/main-compiled.js

'use strict';

var ToDoList = React.createClass({
  displayName: 'ToDoList',

  getInitialState: function getInitialState() {
    return { todoData: this.props.todos };
  },

  handlePriorChange: function handlePriorChange(updatedItem, step) {
    var thisTodos = this.props.todos;
    thisTodos.forEach(function (item, index) {
      if (item.text == updatedItem) {
        thisTodos[index].priority += step;
        return;
      }
    });
    this.setState({ todoData: this.props.todos });
  },

  render: function render() {
    var rows = [];

    this.props.todos.sort(function (a, b) {
      return a.priority > b.priority ? -1 : 1;
    });

    var handlerFunction = this.handlePriorChange;

    this.props.todos.forEach(function (item) {
      rows.push(React.createElement(ToDoItem, { handler: handlerFunction, prior: item.priority, content: item.text }));
    });

    return React.createElement(
      'ul',
      null,
      rows
    );
  }
});

var TODO = [{ priority: 4, text: 'Complete reactJS intro' }, { priority: 3, text: 'Find out JS building process' }, { priority: 2, text: 'Think in JS' }, { priority: 1, text: 'Study Flex' }];

React.render(React.createElement(ToDoList, { todos: TODO }), document.getElementById('example'));
