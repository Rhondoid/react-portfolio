// import React, { useState } from 'react';
import React from 'react'
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';



export default function Header() {
  return (
    <div className='header'>
      
    </div>
  )
}

function NavigationBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  