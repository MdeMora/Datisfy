import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'


import "./ControlPanel.css"; 

import PlayListServices from "../../../../services/playlist.services";

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check:"Estoy Working"
    };
    this.playListServices = new PlayListServices();
  }

  

  render() {
    return (
      <>
        <h1>Control Panel</h1>
        <h2>Filtros</h2>
        <Link className="createBtn" to="/playlists/new"> Create +</Link>
      </>
    );
  }
}

export default ControlPanel;