import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Signup from './components/pages/auth/signup/Signup'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/auth/login/Login'
import StatsIndex from './components/pages/stats/StatsIndex'

import NavBar from './components/ui/Navbar'


import AuthServices from './services/auth.services'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }

  render() {

    return (
      <>
        {<NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />}

        <Switch>
          <Route exact path="/" render={() => <h1>did u just uWu me???</h1>} />
          <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser}{...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
          <Route path="/charts" render={() => <StatsIndex />}/>
        </Switch>
      </>

    )
  }
  
}

export default App;
