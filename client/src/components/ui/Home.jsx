import React, { Component } from 'react'

import './Home.css'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <Container>
                <header className="hero">
                    <h1>Dati<span className="colorSpoti">sfy</span></h1>
                </header>
                <main>
                    <Row>
                        <Col md={6}>
                            <div className="spotBlack">
                                <h2>Charts</h2>
                                <hr></hr>
                                <p>Search for your favourites tracks and artist and compare them!</p>
                                <Link to="/charts">Charts</Link>
                            </div>
                            
                        </Col>
                        <Col md={6}>

                        <div className="spotBlack">
                            <h2>Playlists</h2>
                            <hr></hr>
                            <p>Create your playlists and vote for your favourites!</p>
                            <Link to="/playlists">Playlists</Link>
                        </div>

                        </Col>
                    </Row>
                </main> 
            </Container>  
        )
    }
}

export default Home