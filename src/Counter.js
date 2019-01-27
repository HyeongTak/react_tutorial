import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';


  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;