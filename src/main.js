import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main>
        <Container>
          {this.props.beastData.map( (value, index) => {
            return (
              <Row>
                <Col>
                  <HornedBeast
                    key = {index}
                    title = {value.title}
                    image_url = {value.image_url}
                    description = {value.description}
                    horns = {value.horns}
                  />
                </Col>
              </Row>
            );
          })}
        </Container>
      </main>
    );
  }
}

export default Main;
