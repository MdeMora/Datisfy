import React, { Component } from 'react'
import Radar from '../../charts/Radar'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


class ChartDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedChart:this.props.selectedChart,
            // audioFeatures:this.props.audioFeatures,
        }
    }



    drawChart = () =>{

        switch (this.props.selectedChart) {
            case "Radar":
                return (
                    <>
                    <Container>
                        <div style={{height:"500px"}}>
                                <Radar data={this.props.audioFeatures}/>
                        </div>
                    </Container>
                    <Link className="backBtn" to="/charts" onClick={this.props.reset} >Go Back</Link>
                    </>
                )
                
            case "Bar":
                return <h1>Soy el bar</h1>
                
            case "A1":
                return <h1>Soy el bar</h1>
                
            case "A2":
                return <h1>Soy el bar</h1>
            default:
                return <h1>LOLO</h1>
                
        }
    }

    

    render(){
        return(
            this.drawChart()
            // <h1>ChartDrawer</h1>
        )
    }
}

export default ChartDrawer;