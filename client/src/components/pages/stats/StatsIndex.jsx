import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ChartServices from '../../../services/chart.services'
import Browser from './browser/Browser'
import Charter from './charter/Charter'

class StatsIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSearch:""
        }
        this.services = new ChartServices()

    }
    
    chosenSearch = (selectedSearch) =>{
        this.setState({selectedSearch:selectedSearch})
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Browser/>
                    </Col>
                    <Col>
                        <Charter/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StatsIndex