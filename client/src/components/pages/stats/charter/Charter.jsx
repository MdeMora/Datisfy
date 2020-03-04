import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import SearchServices from "../../../../services/search.services";


class Charter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedObjs: this.props.selectedObjs,
            audioFeatures : [],
            arrID:[]
        }
        this.services = new SearchServices()
    }

    componentDidMount(){
        
    }

    componentDidUpdate(prevProps, prevState) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.selectedObjs !== prevProps.selectedObjs) { 
          this.setState({
            selectedObjs:this.props.selectedObjs
            });
        }

        let selectedObjsCopy = [...this.state.selectedObjs],arrIdCopy=[]
        selectedObjsCopy.forEach((elm)=>arrIdCopy.push(elm.id))
        
        if(prevState.selectedObjs.length!==arrIdCopy.length){
            this.setState({
                arrID:arrIdCopy
            },()=>this.services.audioFeatures(this.state.arrID))
        }

        
    }


    render() {

        return (
            <Container>
               Soy el Charter y ahora solo funciono para radar tracks


            </Container>
        )
    }
}

export default Charter