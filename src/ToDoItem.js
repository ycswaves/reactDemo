var ToDoItem = React.createClass({
  incrPrior: function(){
    this.props.handler(this.props.content, 1);
  },
  decrPrior: function(){
    this.props.handler(this.props.content, -1);
  },
  render: function() {
    return (
      <li>
        {this.props.content}
        <a href="#" onClick={this.incrPrior}><i className="fa fa-caret-square-o-up"></i></a>
        <a href="#" onClick={this.decrPrior}><i className="fa fa-caret-square-o-down"></i></a>
        ({this.props.prior})
      </li>
    )
  }
})