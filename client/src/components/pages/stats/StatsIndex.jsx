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
            inputSearch:"",
            selected:""
        }
        this.services = new ChartServices()

    }
    
    setSearch = (selectedSearch) =>{
        this.setState({selectedSearch:selectedSearch})
    }
    setSelected = (selected) => {
        //TODO Verificar el tipo de lo que sea ya actualizar
        console.log("NO Estoy funcionando")
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Browser setSearch={this.setSearch} setSelected={this.setSelected}/>
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