
var User = React.createClass({
  render: function() {
    return (
      <div className="user">
        {this.props.email}
      </div>
    );
  }
});
