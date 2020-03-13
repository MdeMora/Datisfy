import React, { Component } from 'react'

import PlaylistServices from '../../../../services/playlist.services'

import './PlaylistDetails.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import SelectionCard from '../../stats/browser/selectionPanel/selectedCard/SelectionCard'

class PlaylistDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playlist:undefined,
            loggedInUser:this.props.loggedInUser
        }
        this.playlistService = new PlaylistServices()
    }
    
    componentDidMount(){
        this.playlistService.getPlaylistDetails(this.props.match.params.id)
        .then(x => this.setState({playlist:x.data}))
        .catch(err => console.log(err))

        console.log(this.state.loggedInUser)

    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        this.props.loggedInUser !== prevProps.loggedInUser && this.setState({loggedInUser:this.props.loggedInUser});
        
    }
    
    upvote = () => {
        if(this.state.loggedInUser){
            this.playlistService.postAddUpvote({plId:this.state.playlist._id, upvotes:this.state.playlist.upvotes})
            this.refresh()
        }else{
            this.props.history.push('/login')
        }
    }

    refresh = () => {
        let actObj = this.state.playlist
        actObj.upvotes+=1
        this.setState({playlist:actObj})
    }
    
    render() {

        return (
            this.state.playlist===undefined?(
                <div className="mkFit d-flex justify-content-center align-items-center">
                <div className="spinner-box mkAbsolute">

               <div className="blue-orbit leo"></div>
               <div className="green-orbit leo"></div>
               <div className="red-orbit leo"></div>
               <div className="white-orbit w1 leo"></div>
               <div className="white-orbit w2 leo"></div>
               <div className="white-orbit w3 leo"></div>

               </div>
          </div>
            ):(
                <Container>
                    <header className="d-flex align-items-center flex-column">

                        
                        <h1>{this.state.playlist.name}</h1> 
                        <div className="upvoteBtn p-2" onClick={this.upvote}>Upvote! +1</div>
                        <p className="p-0 m-0">Created by: {this.state.playlist.author}</p>
                        <p>Upvotes: {this.state.playlist.upvotes}</p>

                        {/* <h1>{this.state.playlist.name}</h1>
                        <h2>{this.state.playlist.author}</h2>
                        <h3>{this.state.playlist.description}</h3>
                        <h4>{this.state.playlist.upvotes}</h4>
                        <div className="upvoteBtn p-2" onClick={this.upvote}>Upvote! +1</div> */}
                    </header>
                    <div>
                        <Row>
                        {this.state.playlist.tracks.map(elm => {
                            return <SelectionCard key={elm._id} {...elm} {...this.props} minified/>
                            })}
                        </Row>
                    </div>
                </Container>
            )
            
        )
    }
}

export default PlaylistDetails