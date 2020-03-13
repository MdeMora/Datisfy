import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

import "./ControlPanel.css"; 

import PlayListServices from "../../../../services/playlist.services";

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser:this.props.loggedInUser,
      showbtn:this.props.showbtn
    }
    this.playListServices = new PlayListServices();
  }
  componentDidUpdate(prevProps) {
    this.props.loggedInUser !== prevProps.loggedInUser && this.setState({loggedInUser:this.props.loggedInUser})
    this.props.showbtn !== prevProps.showbtn && this.setState({showbtn:this.props.showbtn})

  }
  check = () => {
    this.state.loggedInUser? this.props.history.push('/playlists/new') : this.props.history.push('/login')
  }

  render() {
    return (
    
      this.state.showbtn?(
        <>
        <div className="createBtn p-2" onClick={this.check}> Create +</div>
        <div className="createBtn p-2" onClick={()=>this.props.showBackBtn()}> Go back</div>
        </>
      ) : <div className="createBtn p-2" onClick={this.check}> Create +</div>
        
      
    )
  }
}

export default ControlPanel;