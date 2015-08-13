var MessageBox = React.createClass({
  loadFromServer: function() {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(messages) {
      console.log('messages ' + messages)
        this.setState({messages: messages});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    var request = $.get('/presence/users_online')
    request.done(function(users){
      this.setState({users: users});
    }.bind(this));
  },
  getInitialState: function() {
    return {
      messages: [],
      users: []
    };
  },
  componentDidMount: function() {
    this.loadFromServer
    pollInterval = setInterval(this.loadFromServer, this.props.pollInterval);
  },
  componentWillUnmount: function() {
    window.clearInterval(pollInterval);
  },
  render: function() {
    console.log('users: ' ,this.state.users)
    return (
      <div className="messageBox">
        <MessageList data={this.state.messages} />
        <UserList data={this.state.users} />
      </div>
    );
  }
});
