import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '30px'
    };
    return (
      <div style={style}>
        안녕하세요
      </div>
    );
  }
}

export default App;
