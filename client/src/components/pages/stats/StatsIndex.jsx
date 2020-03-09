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
            selectedObjs:[],
            selectedIds:[],
            selectedTerm:""
        }

    }
    
    setSearch = (selectedSearch) =>{
        this.setState({selectedSearch:selectedSearch})
    }

    setSelected = (selected,reset) => {

        if(!reset){
            let selectedObjs = [...this.state.selectedObjs]
            let selectedIdsCopy = [...this.state.selectedIds]

            selectedIdsCopy.push(selected.id)
            selectedObjs.push(selected)

            this.setState({selectedObjs:selectedObjs,selectedIds:selectedIdsCopy})
        }else{
            this.setState({selectedObjs:[],selectedIds:[]})
        }
        
    }

    removeSelected = (id) =>{

        let selectedObjs = [...this.state.selectedObjs]
        let selectedIdsCopy = [...this.state.selectedIds]

        selectedObjs.forEach((elm,idx)=>{
           if(elm.id === id){
            selectedObjs.splice(idx,1)
            selectedIdsCopy.splice(idx,1)
           } 
        })

        console.log("deberia de haber borrado el objeto",selectedObjs)
        this.setState({selectedObjs:selectedObjs,selectedIds:selectedIdsCopy})
        
    }

    setIndexTerm = input => {
        this.setState({ selectedTerm: input });
    }
    render() {

        return (
            <Container className="statIndex">
                <Row>
                    <Col>
                        <Browser setSearch={this.setSearch} setSelected={this.setSelected} setIndexTerm={this.setIndexTerm} removeSelected={this.removeSelected} selectedIds={this.state.selectedIds}/>
                    </Col>
                    <Col>
                        <Charter selectedObjs={this.state.selectedObjs} selectedTerm={this.state.selectedTerm} arrId={this.state.selectedIds}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StatsIndex