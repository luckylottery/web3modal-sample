import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Web3modals from "./Components/Web3modal";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Web3modals></Web3modals>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);