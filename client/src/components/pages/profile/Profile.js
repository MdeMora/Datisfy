import React, { Component } from 'react'

import PlayListServices from '../../../services/playlist.services'

class Profile extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            myPlaylists:[],
            loggedInUser:this.props.loggedInUser
        }
        this.playListServices = new PlayListServices()
    }

    componentDidMount(){
        this.playListServices.postUserPlaylist({userId:this.state.loggedInUser._id})
        .then(theUser => this.setState({myPlaylists:theUser.data.playlists,reload:true}))
        .catch(err => console.error(err))
    }

    componentDidUpdate(prevProps,prevState) {
        this.props.loggedInUser !== prevProps.loggedInUser && this.setState({loggedInUser:this.props.loggedInUser});
  }

    render(){

        return(
            !this.state.reload?(
                <div className="spinner-box">

                    <div className="blue-orbit leo"></div>
                    <div className="green-orbit leo"></div>
                    <div className="red-orbit leo"></div>
                    <div className="white-orbit w1 leo"></div>
                    <div className="white-orbit w2 leo"></div>
                    <div className="white-orbit w3 leo"></div>

                </div>
            ):(
                <div>
                    <h1>Hola :{this.props.loggedInUser.username}</h1>
                </div>
            )
        )
    }
}

export default Profile