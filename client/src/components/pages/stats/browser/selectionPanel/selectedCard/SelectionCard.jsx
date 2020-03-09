import React, { Component } from 'react'

import './SelectionCard.css'



class SelectionCard extends Component{

    constructor(props){
        super(props)
        this.state={
            arrIds:this.props.selectedIds,//a
            cardId:this.props.id,
            isSelected:false,
            hover:false
        }
        this.setSelected=this.props.setSelected
        this.setSelectedIds=this.props.setSelectedIds
        this.removeId=this.props.removeId
        this.removeSelected=this.props.removeSelected
    }

    componentDidUpdate(prevProps,prevState) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.selectedIds !== prevProps.selectedIds) { 
          this.setState({
            arrIds:this.props.selectedIds
            });
        }

        if (this.state.isSelected === prevState.isSelected) { 

            
        }
 
    }


    millisToMinutesAndSeconds = (millis) => {
        return Math.floor(millis / 60000) + ":" + (((millis % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + ((millis % 60000) / 1000).toFixed(0);
    }

    toggleIsSelected= () => {


        if(!this.state.arrIds.includes(this.state.cardId)){ //Si NO esta en el array me lo metes y me lopintas
            this.setState({isSelected: true}) 
            this.setSelected(this.props)
        }else{ // Si esta en el array me lo sacas y no lo pintas
            this.setState({isSelected: false}) 
            this.removeSelected(this.props.id)//a
        }
    }

    toggleHover= () => this.setState({hover: !this.state.hover})

    render(){
        return(
            this.props.type==="track"?(
                <div className="spotcard d-flex" 
                onClick={this.toggleIsSelected} // Esto lo hace todo
                onMouseEnter={this.toggleHover} //Esto ok
                onMouseLeave={this.toggleHover} //Ok
                style={{backgroundColor: this.state.isSelected || this.state.hover ? "#535353" : "inherit"}} >
                    
                    <img src={this.props.album.images[0].url} alt="img track"></img>
                    <div className="spotcard-body">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.type} - {this.props.artists[0].name} - {this.millisToMinutesAndSeconds(this.props.duration_ms)}</p>
                    </div>
                </div>

            ):( //Esto de artistas NO MIRAR Y COPIAR DESPUES
                <div className="spotcard d-flex" onClick={this.toggleIsSelected} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={{backgroundColor: this.state.isSelected || this.state.hover ? "#535353" : "inherit"}} >
                    <img className="artistImg" alt ="artist img" src={this.props.images[0]?this.props.images[0].url:"https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg"}></img>
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