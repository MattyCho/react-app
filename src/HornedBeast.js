import React from 'react';
import heart from './Red-Heart.png';
import SelectedBeast from './SelectedBeast';
import './style.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
      modalShown: false
    };
  }

  click = () => {
    this.setState({ timesClicked: this.state.timesClicked +1});
    if (this.state.timesClicked > 0) {
      <img src={heart}/>;
    }
  }

  render() {
    return (
      <div>
        <SelectedBeast
          title = {this.props.title}
          image_url = {this.props.image_url}
        />
        <p>Title: {this.props.title}</p>
        <p>Description: {this.props.description}</p>
        <span>Like this picture? Click the heart. # of times favorited: {this.state.timesClicked}</span>
        <img class="heart" src={heart} onClick={this.click} size="sm"></img>
      </div>
    );
  }
}

export default HornedBeast;
