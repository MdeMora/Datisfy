import React, { Component } from 'react'

import PlayListServices from '../../../services/playlist.services'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import PlaylistCard from '../playlists/playlistCard/PlaylistCard'

import './Profile.css'

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

               <div className="mkFit d-flex justify-content-center align-items-center">
                     <div className="spinner-box mkAbsolute">

                    <div className="blue-orbit leo"></div>
                    <div className="green-orbit leo"></div>
                    <div className="red-orbit leo"></div>
                    <div className="white-orbit w1 leo"></div>
                    <div className="white-orbit w2 leo"></div>
                    <div className="white-orbit w3 leo"></div>

                    </div>
               </div>
            ):(
                <Container>
                    <h1 className="mb-5">{this.props.loggedInUser.username}</h1>

                    <h3>My playlists:</h3>

                    <Row>
                        {this.state.myPlaylists.map(elm => <PlaylistCard key={elm._id} {...elm} {...this.props}/>)}
                    </Row>

                </Container>
            )
        )
    }
}

export default Profile