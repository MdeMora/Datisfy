import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Browser from './browser/Browser'
import Charter from './charter/Charter'

import './StatsIndex.css'

class StatsIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputSearch:"",
            selectedObjs:[]
        }

    }
    
    setSearch = (selectedSearch) =>{
        this.setState({selectedSearch:selectedSearch})
    }

    setSelected = (selected,reset) => {

        if(!reset){
            let selectedObjsCopy = [...this.state.selectedObjs]
            selectedObjsCopy.push(selected)
            this.setState({selectedObjs:selectedObjsCopy})
        }else{
            this.setState({selectedObjs:[]})
        }
        
    }

    render() {

        return (
            <Container className="statIndex">
                <Row>
                    <Col>
                        <Browser setSearch={this.setSearch} setSelected={this.setSelected}/>
                    </Col>
                    <Col>
                        <Charter selectedObjs={this.state.selectedObjs}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StatsIndex