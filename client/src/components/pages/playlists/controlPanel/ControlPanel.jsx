import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'


import "./ControlPanel.css"; 

import PlayListServices from "../../../../services/playlist.services";

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser:this.props.loggedInUser
    };
    this.playListServices = new PlayListServices();
  }
  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.props.loggedInUser !== prevProps.loggedInUser) { 
      this.setState({
        loggedInUser:this.props.loggedInUser
        });
    }
}
  check = () => {
    if(this.state.loggedInUser){
      this.props.history.push('/playlists/new')
    }else{
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <>
        <h1>Control Panel</h1>
        <h2>Filtros</h2>
        <a className="createBtn" onClick={this.check}> Create +</a>
      </>
    );
  }
}

export default ControlPanel;