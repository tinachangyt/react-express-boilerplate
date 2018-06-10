import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  // componentDidMount () {
  //   axios
  //   .get('/healthcheck')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   // .catch(error => {
  //   //   this.setState({ error: error })
  //   // })
  // }

  // something nice to have in the app
  // state = {
  //   error: false,
  //   loading: false
  // }

  //this is called Blocking
  async componentDidMount() {
    try {
      const response = await axios.get('/healthcheck');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>Hello world.</div>
    )
  }
}

export default App