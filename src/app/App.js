import React from 'react';

import data from '../../data/data';

import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  componentDidMount() {

  }

  render() {

    return (
      <Router >
        <div>
          {data.welcome}
        </div>
      </Router >
    )
  }
}

export default App;