import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthServices from '../../services/auth.services'

import './Navbar.css'

import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.authServices = new AuthServices()
    }

    logout = () => {
        this.authServices.logout()
            .then(response => this.props.setTheUser(false))
            .catch(err => console.log(err))
    }


    render() {
        const greeting = this.props.loggedInUser ? <>{this.props.loggedInUser.username}</> : <>Invitad@</>


        return (


            this.props.loggedInUser ?
                (
                    <Navbar className="spotNav" expand="lg" variant="dark">
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Home</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/charts">Charts</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/playlists">Playlists</Link></Nav.Link>
                                <Nav.Link onClick={this.logout}>Log Out</Nav.Link>
                                <Nav.Link as="div"><Link to="/profile">{greeting}</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
                :
                (
                    <Navbar className="spotNav" expand="lg" variant="dark">
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Home</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/signup">Sign Up</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">Log In</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/charts">Charts</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/playlists">Playlists</Link></Nav.Link>
                                <Nav.Link as="div"> {greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
        )
    }
}

export default Navigation