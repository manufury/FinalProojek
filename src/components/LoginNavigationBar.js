import React from 'react';
import { Navbar } from 'react-bootstrap';

export const LoginNavigationBar = () => (
    // <Navbar bg="dark" expand="lg">
    //     <Navbar.Brand href="/">Mid Project</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ml-auto">
    //             <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    //             <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    //             <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Final Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        </Navbar.Collapse>
    </Navbar>
)