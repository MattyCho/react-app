import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false
    };
  }

  handleModal = () => {
    this.setState({ modalShown: !this.state.modalShown});
    console.log(this.modalShown);
  }

  render() {
    return (
      <div>
        <img class="picture" src={this.props.image_url} onClick={this.handleModal}/>
        <Modal size="lg" show={this.state.modalShown} onHide={this.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img class="modalPic" src={this.props.image_url} className="img-fluid"></img>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}

export default SelectedBeast;
