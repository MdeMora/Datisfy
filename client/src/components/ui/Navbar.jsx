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
            .then(response => {
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log("--Navbar 198",this.props)
        const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}</> : <>Hola, invitad@</>


        return (


            this.props.loggedInUser ?
                (
                    <Navbar className="spotNav" expand="lg" variant="dark">
                        <Navbar.Brand href="/">dev Nav!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Inicio</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/profile">Perfil</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/charts">charts</Link></Nav.Link>
                                <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
                                <Nav.Link as="small">{greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
                :
                (
                    <Navbar className="spotNav" expand="lg" variant="dark">
                        <Navbar.Brand href="#home">dev Nav!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Inicio</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/charts">charts</Link></Nav.Link>
                                <Nav.Link as="small">{greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
        )
    }
}

export default Navigation