import React, { Component } from 'react'

import './SelectionCard.css'

// class ProductTable extends Component

class SelectionCard extends Component{

    constructor(props){
        super(props)
        this.state={
            isSelected:false,
            hover:false
        }
    }

    millisToMinutesAndSeconds = (millis) => {
        return Math.floor(millis / 60000) + ":" + (((millis % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + ((millis % 60000) / 1000).toFixed(0);
    }

    select = () =>{
        this.state.isSelected?this.setState({isSelected:false}):this.setState({isSelected:true})
    }

    toggleHover= () => this.setState({hover: !this.state.hover})

    render(){
        return(
            // style={this.state.isSelected?{backgroundColor:"salmon"}:{backgroundColor:"inherit"}}
        <div className="spotcard d-flex" onClick={this.select} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={{backgroundColor: this.state.isSelected || this.state.hover ? "salmon" : "inherit"}} >
            <img src={this.props.album.images[0].url}></img>
            <div className="spotcard-body">
                <h1>{this.props.name}</h1>
                <p>{this.props.type} - {this.props.artists[0].name} - {this.millisToMinutesAndSeconds(this.props.duration_ms)}</p>
            </div>
        </div>
    )
    }
}

export default SelectionCard;