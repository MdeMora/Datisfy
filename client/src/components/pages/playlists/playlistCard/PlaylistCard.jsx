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

    toggleHoverEnter= () => this.setState({hover: true})
    toggleHoverLeave= () => this.setState({hover: false})
    click = () => this.props.history.push(`/playlists/${this.props._id}`) 


    render(){
        return (
            <Col md={6}>
                <div className="spotcard d-flex" 
                onMouseEnter={this.toggleHoverEnter} //Esto ok
                onMouseLeave={this.toggleHoverLeave} //Ok
                style={{backgroundColor: this.state.hover ? "#535353" : "inherit"}}
                onClick={this.click}>
                
                    <img src={this.props.tracks[0].album.images[0].url} alt="img track"></img>
                    <div className="spotcard-body">
                        <h1>{this.props.name}</h1>
                        <div className="d-flex">
                            <div className="ml-1">
                                {this.props.genres} - 
                            </div>
                            <div className="ml-1">
                                {this.props.author} - 
                            </div>
                            <div className="ml-1">
                                Upvotes: <span className="upvotes">{this.props.upvotes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default PlaylistCard;

