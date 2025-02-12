import React, { useState } from 'react'
import './Portfolio.css'


//  const parag = {
//     WebkitLineClamp:2,
//     WebkitBoxOrient:'vertical',
//     overflow:'hidden',
//     display:'-webkit-box'
// }

const Portfolio = () => {
    // const[isOpen,setIsopen]=useState(false)
    
    

  return (
  <>
  <section>
    <div className="container" id='portfolio'>
        <h3 className='first text-center my-5'>My Portfolio</h3>
        <div className="projects row d-flex flex-wrap justify-content-evenly justify-content-lg-between">
            <div className="e-commerce app my-3  col-lg-3 col-md-5 col-sm-12 p-4 shadow" data-aos="flip-down" data-aos-duration="600" >
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/Go-Daddy/tree/main/project">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Go-daddy Clone</h5>
                
                    <h6 className='mt-3' >A website that allows people to buy and sell Lands, services, and Modernate Lands over the internet rather than at a brick-and-mortar location.</h6>
                </section>
                <section className='used-apps d-flex justify-content-between px-2 '>
                    <p className='text-secondary'>HTML</p>
                    <p className='text-secondary'>Bootstrap</p>
                    <p className='text-secondary'>Css</p>
                </section>
            </div>
            <div className="Chat App app my-3 col-lg-4 col-md-5 col-sm-12 p-4 shadow"  data-aos="flip-down" data-aos-duration="900">
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/ecommerce">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Ecommerce</h5>
                
                    <h6 className='mt-3' >This app is Purchase products and things Sells . Free Delivery in all are products</h6>
                </section>
                <section className='d-flex justify-content-between '>
                    <p className='text-secondary'>React</p>
                    <p className='text-secondary'>JS</p>
                    <p className='text-secondary'>Bootstrap</p>
                    <p className='text-secondary'>Css</p>
                </section>
            </div>
            <div className="Pizza Delivery app my-4 col-lg-3 col-md-5 col-sm-12 p-4 shadow"  data-aos="flip-down" data-aos-duration="1200">
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/portfolio">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Portfolio</h5>
                
                    <h6 className='mt-3' >person working and insudtial related works documents collection create this portfolio.</h6>
                </section>
                <footer className='d-flex justify-content-between '>
                    <p className='text-secondary'>React</p>
                    <p className='text-secondary'>JS</p>
                    <p className='text-secondary'>Bootstrap</p>
                    <p className='text-secondary'>Css</p>
                </footer>
               
            </div>
            <div className="Blog app my-3 col-lg-3 col-md-5 col-sm-12 p-4 shadow"  data-aos="flip-down" data-aos-duration="1200">
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/bank_program_python">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Banking Program</h5>
                
                    <h6 className='mt-3' >A bank programm in run time server. An Idle app using this project make it</h6>
                </section>
                <footer className='d-flex justify-content-between '>
                    <p className='text-secondary'>Python</p>
                </footer>
               
            </div>
            <div className="Nationalize API app my-3 col-lg-4 col-md-5 col-sm-12 p-4 shadow"  data-aos="flip-down" data-aos-duration="1200">
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/spotify-clone">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Spotify Clone</h5>
                
                    <h6 className='mt-3' >Any audios palying online app like Spotify same clone online entertainment app. Spotify clone apps cater to the growing demand for personalized audio-sharing platforms.</h6>
                </section>
                <footer className='d-flex justify-content-between '>
                    <p className='text-secondary'>React</p>
                    <p className='text-secondary'>JS</p>
                    <p className='text-secondary'>Bootstrap</p>
                    <p className='text-secondary'>Css</p>
                </footer>
               
            </div>
            <div className="youtube app my-3 col-lg-3 col-md-5 col-sm-12 p-4 shadow"  data-aos="flip-down" data-aos-duration="1200">
                <header className='d-flex justify-content-between align-items-center'>
                <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div>
                <a href="https://github.com/kali-offi/netflix">
                    <img src="https://portfolio-5678.netlify.app/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg" className='img-fluid logo2' alt="" />
                </a>
                <a href="">
                    <img src="	https://portfolio-5678.netlify.app/static/media/external-icon.97075d22dfb22a8c8d253b264e892b5f.svg" className='img-fluid logo2'  alt="" />
                </a>
                </div>
                </header>
                <section>
                    <h5 className='my-3'>Netflix Clone</h5>
                
                    <h6 className='mt-3' >Any videos palying online app like Netflix same clone online entertainment app.Netflix clone apps cater to the growing demand for personalized video-sharing platforms. </h6>
                </section>
                <footer className='d-flex justify-content-between '>
                    <p className='text-secondary'>React</p>
                    <p className='text-secondary'>JS</p>
                    <p className='text-secondary'>Tailwind</p>
                    <p className='text-secondary'>Css</p>
                </footer>
               
            </div>
        </div>
    </div>
  </section>
  </>
  )
}

export default Portfolio
