import React from 'react';
import heart from './Red-Heart.png';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Card} from 'react-bootstrap';

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
      <Card style={{ width: '50%', display: 'inline-block'}}>
        <Card.Body>
          <SelectedBeast
            title = {this.props.title}
            image_url = {this.props.image_url}
          />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <span>Like this picture? Click the heart. # of times favorited: {this.state.timesClicked}</span>
          <img class="heart" src={heart} onClick={this.click} size="sm"></img>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
