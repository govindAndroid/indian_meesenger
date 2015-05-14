var Avatar = React.createClass({
  propTypes: {
    sender : React.PropTypes.object.isRequired
  },
  render: function() {
    var sender = this.props.sender;
    var image = null;
    if (sender.avatar) {
      image = <img src={sender.avatar} alt={sender.title}/>;
    }

    var divClass = 'messages-list__item__avatar avatar avatar--small avatar--' + sender.placeholder;

    return (
      <div className={divClass}>
        {image}
        <span>{sender.title[0]}</span>
      </div>
    )
  }
});