// babel src --out-file build/main-compiled.js

var ToDoList = React.createClass({
  getInitialState: function() {
    return {todoData: this.props.todos}
  },

  handlePriorChange: function(updatedItem, step) {
    var thisTodos = this.props.todos;
    thisTodos.forEach(function(item, index) {
      if(item.text == updatedItem) {
        thisTodos[index].priority += step;
        return;
      }
    });
    this.setState({todoData: this.props.todos});
  },

  render: function() {
    var rows = [];

    this.props.todos.sort(function(a, b) {
      return (a.priority > b.priority? -1 : 1);
    });

    var handlerFunction = this.handlePriorChange;

    this.props.todos.forEach(function(item) {
      rows.push(<ToDoItem handler={handlerFunction} prior={item.priority} content={item.text} />);
    });

    return (
      <ul>{rows}</ul>
    );
  }
});

var TODO = [
  {priority: 4, text: 'Complete reactJS intro'},
  {priority: 3, text: 'Find out JS building process'},
  {priority: 2, text: 'Think in JS'},
  {priority: 1, text: 'Study Flex'}
];


React.render(
  <ToDoList todos={TODO} />,
  document.getElementById('example')
);