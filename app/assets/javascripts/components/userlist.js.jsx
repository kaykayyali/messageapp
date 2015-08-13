var UserList = React.createClass({
  render: function() {
    var userNodes = this.props.data.map(function(user, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <User email={user.email} key={index}/>
      );
    });
    return (
      <div className="col-md-4 userList">
        <h4>Users Signed in:</h4>
        {userNodes}
      </div>
    );
  }
});
