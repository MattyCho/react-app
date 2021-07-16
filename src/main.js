import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornCount: 'true'
    };
  }

  filterHorn = (e) => {
    this.setState({
      hornCount: e.target.value
    });
  }

  render() {
    return (
      <main>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Filter by the # of Horns</Form.Label>
            <Form.Control
              onChange={this.filterHorn}
              as="select"
            >
              <option value={true}>All</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={100}>100</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <div>
          {this.props.beastData.filter( (beast) => {
            if (this.state.hornCount === 'true') {
              console.log(this.state.hornCount);
              return true;
            } else {
              console.log(this.state.hornCount);
              return beast.horns === Number(this.state.hornCount);
            }
          }).map( (beast, index) => {
            return (
              <HornedBeast
                key = {index}
                title = {beast.title}
                image_url = {beast.image_url}
                description = {beast.description}
                horns = {beast.horns}
              />
            );
          })}

          {/* {this.props.beastData.map( (value, index) => {
            return (
              <HornedBeast
                key = {index}
                title = {value.title}
                image_url = {value.image_url}
                description = {value.description}
                horns = {value.horns}
              />
            );
          })}; */}
        </div>
      </main>
    );
  }
}

export default Main;
