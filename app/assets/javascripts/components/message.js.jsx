
var Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        <h4>
          {this.props.body}
        </h4>
      </div>
    );
  }
});
