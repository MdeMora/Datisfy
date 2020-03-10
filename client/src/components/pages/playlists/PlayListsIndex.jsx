import React, { Component } from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PlayListServices from '../../../services/playlist.services'

import ControlPanel from './controlPanel/ControlPanel'
import Showcase from './showcase/Showcase'


import './PlayListsIndex.css'

class PlayListIndex extends Component {

    constructor() {
        super()
        this.state = {
            check:"estoyWorking"
        }
        this.playListService = new PlayListServices()
    }
    
    
    render() {

        return (
            <>
                <aside className="d-flex controlPanel justify-content-around"> <ControlPanel /> </aside>

                <Container className="PlayListIndex">
                
                    <Col><Showcase /></Col>
                
                </Container>
            </>
        )
    }
}

export default PlayListIndex