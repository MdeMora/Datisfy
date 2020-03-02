import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'

import ChartServices from '../../../../services/chart.services'

class Charter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSearch:""
        }
        this.services = new ChartServices()
    }


    render() {

        return (
            <Container>
               Soy el Charter
            </Container>
        )
    }
}

export default Charter