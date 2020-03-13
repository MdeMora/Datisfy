import React, { Component } from 'react'
import Radar from '../../charts/Radar'
import TrackLine from '../../charts/TrackLine'
import FollowerLine from '../../charts/FollowerLine'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


class ChartDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedChart:this.props.selectedChart,
        }
    }

    drawChart = () =>{

        switch (this.props.selectedChart) {
            case "Radar":
                return (
                    <>
                    <Container>
                        <div style={{height:"400px"}}>
                                <Radar data={this.props.audioFeatures}/>
                        </div>
                    </Container>
                    <Link className="backBtn" to="/charts" onClick={this.props.reset} >Go Back</Link>
                    </>
                )
                
            case "Popularity":
                return (
                    <>
                    <Container>
                        <div style={{height:"400px"}}>
                                <TrackLine data={this.props.selectedObjs}/>
                        </div>
                    </Container>
                    <Link className="backBtn" to="/charts" onClick={this.props.reset} >Go Back</Link>
                    </>
                )
                
            case "Followers":
                return (
                    <>
                    <Container>
                        <div style={{height:"400px"}}>
                                <FollowerLine data={this.props.selectedObjs}/>
                        </div>
                    </Container>
                    <Link className="backBtn" to="/charts" onClick={this.props.reset} >Go Back</Link>
                    </>
                )

            default:
                return <h1>A incorrect value was introduced to chart, contact technical service</h1>
                
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