import React, { Component } from "react";

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SelectionCard from "../../stats/browser/selectionPanel/selectedCard/SelectionCard"

// import { Link } from 'react-router-dom'

import "./CreatePlayList.css"; 

import Browser from '../../stats/browser/Browser'

import PlayListServices from "../../../../services/playlist.services";


class CreatePlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlist:{
            name:"",
            genres:"",
            moods:"",
            tags:""
        },
        selectedObjs:[],
        selectedIds:[],
        selectedTerm:"",
        errorMsg:"",
    };
    this.playListServices = new PlayListServices();
  }

  
  setSearch = (selectedSearch) =>{
    this.setState({selectedSearch:selectedSearch})
}

setSelected = (selected,reset) => {

    if(this.state.selectedObjs.length<10){
        if(!reset){
            let selectedObjs = [...this.state.selectedObjs]
            let selectedIdsCopy = [...this.state.selectedIds]
    
            selectedIdsCopy.push(selected.id)
            selectedObjs.push(selected)
    
            this.setState({selectedObjs:selectedObjs,selectedIds:selectedIdsCopy,errorMsg:""})
        }else{
            this.setState({selectedObjs:[],selectedIds:[],errorMsg:""})
        }
    }else{
        this.setState({errorMsg:"You can introduce only 10 songs"})
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

handleChange = e => {
    let { name, value } = e.target
    if(name == "tags") {

    }
    this.setState({
        playlist: { ...this.state.playlist, [name]: value }
    })
}

handleSubmit = (e) =>{
    e.preventDefault()

    this.state.selectedObjs.length<10? this.setState({errorMsg:"Introduce 10 tracks"}):
    this.postPlaylist()
}

postPlaylist = () =>{
    this.playListServices.postPlaylist({...this.state.playlist, tracks:this.state.selectedObjs})
        .then((x) => console.log("Bien",x))
        .catch(err => console.log(err))
}
  

  render() {
    return (
        <Container className="PlayListIndex">
        <Row>
            <Col md={4} className="m-3"><Browser tracks setSearch={this.setSearch} setSelected={this.setSelected} setIndexTerm={this.setIndexTerm} removeSelected={this.removeSelected} selectedIds={this.state.selectedIds}/></Col>
            
            <Col>
            <Form className="m-3" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <div className="d-flex">
                        Name:
                        <input type="text" 
                        name="name" 
                        value={this.state.playlist.title} 
                        onChange={this.handleChange} 
                        className="playlist-input"
                        autoComplete="off"
                        />
                    </div>
                </Form.Group>
                <Form.Group>
                    <div className="d-flex">
                        Genres:
                        <input type="text" 
                        name="genres" 
                        value={this.state.playlist.description} 
                        onChange={this.handleChange}
                        className="playlist-input"
                        autoComplete="off"
                        />
                    </div>
                </Form.Group>
                <Form.Group>
                    <div className="d-flex">
                        Moods: 
                        <input type="text" 
                        name="moods" 
                        value={this.state.playlist.length} 
                        onChange={this.handleChange}
                        className="playlist-input"
                        autoComplete="off"
                        />
                    </div>
                </Form.Group>
                <Form.Group>
                    <div className="d-flex">
                        Tags: 
                        <input type="text" 
                        name="tags"
                        className="" 
                        value={this.state.playlist.inversions} 
                        onChange={this.handleChange}
                        className="playlist-input"
                        autoComplete="off"
                        />
                    </div>
                </Form.Group>

                <div>Tracks {this.state.selectedIds.length} / 10</div>
                {this.state.errorMsg}

                <Row>
                    { this.state.selectedObjs.map(elm => <SelectionCard {...elm} minified key={elm.id}selectedIds={this.state.selectedIds}/>)}
                </Row>

                <button className="createBtn" variant="dark" type="submit">New Playlist +</button>
            </Form>

            </Col>
        </Row>
        </Container>
    );
  }
}

export default CreatePlayList;