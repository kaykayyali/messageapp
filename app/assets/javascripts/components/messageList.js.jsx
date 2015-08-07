var MessageList = React.createClass({
  render: function() {
    var messageNodes = this.props.data.map(function(message, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Message body={message.content} title={message.title}key={index}/>
      );
    });
    return (
      <div className="messageList">
        {messageNodes}
      </div>
    );
  }
});
