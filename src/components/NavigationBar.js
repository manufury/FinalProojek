import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
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
            <Nav className="ml-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/Indonesia">Indonesia</Nav.Link>
            <Nav.Link href="/Provinsi">Provinsi</Nav.Link>
            <Nav.Link href="/Global">Global</Nav.Link>
            <Nav.Link> - </Nav.Link>
            <Nav.Link href="/Login">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)