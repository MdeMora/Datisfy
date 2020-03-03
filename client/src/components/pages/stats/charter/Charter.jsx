import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'

class Charter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSearch:""
        }
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