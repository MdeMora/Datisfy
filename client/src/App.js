import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Signup from './components/pages/auth/signup/Signup'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/auth/login/Login'
import StatsIndex from './components/pages/stats/StatsIndex'
import PlayListsIndex from './components/pages/playlists/PlayListsIndex'
import CreatePlayList from './components/pages/playlists/createPlayLists/CreatePlayLists'
import Home from './components/ui/Home'

import NavBar from './components/ui/Navbar'


import AuthServices from './services/auth.services'
import PlayListServices from './services/playlist.services'
import PlaylistDetails from './components/pages/playlists/playlistDetails/PlaylistDetails';


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false, playlists:[]}
    this.authServices = new AuthServices()
    this.playListServices = new PlayListServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.authServices.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }

  getAllPlaylists = () => {
    this.playListServices.getAllPlaylists()
        .then((allPlaylists) => this.setState({ playlists: allPlaylists }))
        .catch(err => console.log(err))
  }

  render() {

    return (
      <>
        {<NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />}

        <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser}{...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
          <Route path="/charts" render={() => <StatsIndex />}/>
          <Route path="/playlists/new" render={(props) => <CreatePlayList {...props}/>}/>
          <Route path="/playlists/:id" render={(props) => <PlaylistDetails {...props} loggedInUser={this.state.loggedInUser}/>}/>
          <Route path="/playlists" render={(props) => <PlayListsIndex {...props} loggedInUser={this.state.loggedInUser} getAllPlaylists={this.getAllPlaylists()} playlists={this.state.playlists}/>}/>
        </Switch>
      </>

    )
  }
  
}

export default App;
