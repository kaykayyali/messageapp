
var Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        <div className='panel panel-default post'>
          <div className="panel-body post-body">
            <div className="container">
              <div className="row">
                <h4>
                  {this.props.title}
                </h4>
              </div>
              <p>
                {this.props.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
