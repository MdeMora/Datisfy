import React, { Component } from 'react'


import Container from 'react-bootstrap/Container'

import PlayListServices from '../../../services/playlist.services'

import ControlPanel from './controlPanel/ControlPanel'
import Showcase from './showcase/Showcase'

class PlayListIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showbtn:false
        }
        this.playListService = new PlayListServices()
    }
    
    showBackBtn = () => {
        this.setState({showbtn:!this.state.showbtn})
    }
    
    render() {

        return (
            <>
                <aside className="d-flex controlPanel justify-content-center"> <ControlPanel {...this.props} showBackBtn={this.showBackBtn} showbtn={this.state.showbtn}/> </aside>

                <Container className="PlayListIndex">
                
                    <Showcase {...this.props} showBackBtn={this.showBackBtn} showbtn={this.state.showbtn} getAllPlaylists={this.getAllPlaylists} playlists={this.props.playlists}/>

                </Container>
            </>
        )
    }
}

export default PlayListIndex