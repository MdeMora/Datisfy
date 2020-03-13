import React, { Component } from "react";

// import Container from 'react-bootstrap/Container'

// import { Link } from 'react-router-dom'


import "./Showcase.css"; 

import PlayListServices from "../../../../services/playlist.services";

import PlaylistCard from '../playlistCard/PlaylistCard'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists:this.props.playlists,  
      genresmoods:["Pop","Latin","Chill","Hip-Hop","Focus","Rock","Workout","Indie","Party","Tastemakers","Electronic","Dance","Decades","Romance","Sleep","R&B","Folk","Jazz","Reggae","Soul","Gaming","TV & Movies","Wellness","Classical","K-Pop","Punk","Dinner","Metal","Cumbia","Kids & Family","Commute","Trending","Blues","Funk","Country"],
      hideModals:this.props.showbtn,
      selectedGenre:""
    };
    this.playListServices = new PlayListServices();
    this.getAllPlaylists=this.props.getAllPlaylists
  }

  componentDidUpdate(prevProps) {
    this.props.showbtn !== prevProps.showbtn && this.setState({hideModals:this.props.showbtn})
    this.props.playlists !== prevProps.playlists && this.setState({playlists:this.props.playlists})

  }

  click = (elm) =>{
    this.props.showBackBtn()
    this.setState({hideModals:true,selectedGenre:elm})
  }

  render() {
    return (
      !this.state.hideModals?(
        <article className="d-flex flex-column align-items-center">

          <h1 className="showcaseHero">Genres & Moods</h1> 
          
          <Row className="justify-content-center">

          {this.state.genresmoods.map(elm => {
            return(
              <Col md={12} lg={3} className="genreModal" onClick={ () => this.click(elm)}>
                <h3>{elm}</h3>
              </Col>
            )
          })}
          </Row>
          </article>
        ):(
          <Row>
            {this.state.playlists.map(elm => {
              return (elm.genres===this.state.selectedGenre && (
                <PlaylistCard key={elm._id} {...elm} {...this.props}/>)
              )
            })}
          </Row>

        )
        
        



          
              
            
             
            
          
        

       

      
    )
  }
}

export default Showcase;