import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import beastData from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: beastData
    };
  }


  render() {
    return (
      <div>
        <Header />
        <Main
          beastData = {this.state.beastData}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
