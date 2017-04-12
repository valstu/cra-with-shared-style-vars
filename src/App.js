import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import styles from './constants/styles';
import './App.css';

const Container = styled.div`
  background: hotpink;
  @media (min-width: ${styles['$grid-breakpoints'].xl}) {
    background: teal;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Container>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
