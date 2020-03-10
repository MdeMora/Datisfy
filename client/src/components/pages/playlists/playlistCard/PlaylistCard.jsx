import React, { Component } from 'react'
import './PlaylistCard.css'
import Col from 'react-bootstrap/Col'

class PlaylistCard extends Component{
    
    constructor(props){
        super(props)
        this.state={
            hover:false
        }
    }

    toggleHover= () => this.setState({hover: !this.state.hover})


    render(){
        return (
            <Col md={6}>
                <div className="spotcard d-flex" 
                onMouseEnter={this.toggleHover} //Esto ok
                onMouseLeave={this.toggleHover} //Ok
                style={{backgroundColor: this.state.hover ? "#535353" : "inherit"}} >
                
                    <img src={this.props.tracks[0].album.images[0].url} alt="img track"></img>
                    <div className="spotcard-body">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.genres} - {this.props.moods} </p>
                    
                    </div>
                </div>
            </Col>
        )
    }
}

export default PlaylistCard;

