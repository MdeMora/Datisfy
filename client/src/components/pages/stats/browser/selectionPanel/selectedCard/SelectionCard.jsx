import React, { Component } from 'react'

import './SelectionCard.css'

// class ProductTable extends Component

class SelectionCard extends Component{

    constructor(props){
        super(props)
        this.state={
            selectedObj:[],
            isSelected:false,
            hover:false
        }
        this.setSelected=this.props.setSelected
    }

    millisToMinutesAndSeconds = (millis) => {
        return Math.floor(millis / 60000) + ":" + (((millis % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + ((millis % 60000) / 1000).toFixed(0);
    }

    toggleIsSelected= () => {
        this.setState({isSelected: !this.state.isSelected})

        !this.state.isSelected && this.setSelected(this.props)

        // !this.state.isSelected ? this.setSelected(this.props) : null
        // if(!this.state.isSelected){
        //     this.setSelected(this.props)
        // }
        
    }

    toggleHover= () => this.setState({hover: !this.state.hover})

    render(){
       
        return(
            // style={this.state.isSelected?{backgroundColor:"salmon"}:{backgroundColor:"inherit"}}
            this.props.type==="track"?(
                <div className="spotcard d-flex" onClick={this.toggleIsSelected} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={{backgroundColor: this.state.isSelected || this.state.hover ? "#535353" : "inherit"}} >
                    <img src={this.props.album.images[0].url}></img>
                    <div className="spotcard-body">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.type} - {this.props.artists[0].name} - {this.millisToMinutesAndSeconds(this.props.duration_ms)}</p>
                    </div>
                </div>
            ):(
                <div className="spotcard d-flex" onClick={this.toggleIsSelected} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={{backgroundColor: this.state.isSelected || this.state.hover ? "#535353" : "inherit"}} >
                    <img className="artistImg"src={this.props.images[0]?this.props.images[0].url:"https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg"}></img>
                    <div className="spotcard-body">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.type} &nbsp; &nbsp; {this.props.genres[0]}</p>
                    </div>
                </div>
            )
        
    )
    }
}

export default SelectionCard;