import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import '../index.css'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage'

function App() {
  return (
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Creigh-Demo-Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <div>
                    <Form inline>
                        <div  className="pr-1"><input type="text" placeholder="Find Professionals & workers" size="30" className='search-bar'/></div>
                        <div><Button variant="outline-primary" className="">Search</Button></div>
                    </Form>
                    </div>
                </Nav>
                
                <Nav>
                    <div>
                    <Link to="/login">
                        LOG IN
                    </Link>
                    </div>
                    <div className='nav-bar'>
                    <Link to="/signup">
                        SIGN IN
                    </Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/login" exact render={() => <AboutPage />} />
        <Route path="/signup" exact render={() => <ContactPage />} />


        </Router>
  );
}

export default App;
