import React, { Component } from 'react'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import PlayListServices from '../../../services/playlist.services'

import ControlPanel from './controlPanel/ControlPanel'
import Showcase from './showcase/Showcase'


import './PlayListsIndex.css'

class PlayListIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            check:"estoyWorking"
        }
        this.playListService = new PlayListServices()
    }
    
    
    render() {

        return (
            <>
                <aside className="d-flex controlPanel justify-content-around"> <ControlPanel {...this.props} /> </aside>

                <Container className="PlayListIndex">
                
                    <Col><Showcase {...this.props}/></Col>

                
                </Container>
            </>
        )
    }
}

export default PlayListIndex