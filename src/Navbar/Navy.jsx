import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navy.css'
import Toogle from '../toogle/toogle';

const Navy = () => {
  return (
    <>
      <section className='navy'>
        <Navbar expand="lg" >
          <Container className='d-lg-flex justify-content-lg-evenly '>
            <h3 href="#home" className='first m-0'><span >K</span>AVITHA</h3>
            <div className='d-flex justify-content-center align-items-center m-lg-auto'>
              <Toogle />
              <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler1' />

            </div>
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto nav-link " >
                <a className='me-3' href="#home">Home</a>
                <a className='me-3' href="#About">About</a>
                <a className='me-3' href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
              </Nav>
            </Navbar.Collapse>



          </Container>
        </Navbar>
      </section>
    </>
  )
}

export default Navy