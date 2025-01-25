import React, { useEffect } from 'react'
import './About.css'
import img from '../assets/image1.jpg'


const About = () => {
  
  return (
   <>
   <section className='my-5' id='About'>
    <div className="container side" >
    <h3 className='text-center first my-5' data-aos="fade-up" data-aos-duration="1000">About Me</h3>
    <div className='d-lg-flex '>
        <div className="col-lg-7 col-12 text=center ">
            <div className='d-lg-inline-block d-flex flex-column  align-items-center '>
            <p data-aos="fade-left" data-aos-duration="1000">My name is Kavitha, I am a Front end developer with a great passion for programming. I am passionate about delivering solutions that add value to people's lives and at the same time challenge me. Improved my skills as a Front-End </p>
             <p data-aos="fade-left" data-aos-duration="1300">I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
             <p data-aos="fade-left" data-aos-duration="1500">I am a dedicated person who pursues to make his dreams come true, hardworking and results oriented, I always seek to achieve my best version.</p>
             <h6 className='skill' data-aos="fade-right" data-aos-duration="1800">Here are my main skills:</h6></div>
             <div className='hard-skills my-3 d-flex justify-content-lg-start justify-content-center'>
                <div className="react pe-2" data-aos="fade-up" data-aos-duration="1000">
                    
                    <img src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain" className='img-fluid logo' alt="" />
                </div>
                <div className="js px-2"  data-aos="fade-up" data-aos-duration="1300">
                 
                    <img src="	https://portfolio-5678.netlify.app/static/media/js-icon.ffcf56dc5498f7bbbec802191c740e5f.svg" className='img-fluid logo' alt="" />
                </div>
                <div className="css px-2"  data-aos="fade-up" data-aos-duration="1600">
                  
                    <img src="https://portfolio-5678.netlify.app/static/media/css-icon.60a6c50d5a470990f63ee17a3bbd9178.svg" className='img-fluid logo' alt="" />
                </div>
                <div className="html px-2" data-aos="fade-up" data-aos-duration="1000">
                    <img src="https://portfolio-5678.netlify.app/static/media/html-icon.ebfc51e406097a90691ab82f1aa72db3.svg" className='img-fluid logo' alt="" />
                </div>
             </div>
        </div>
        <div className=" col-lg-5 col-12 my-lg-0 my-5  text-center" data-aos='fade-right' data-aos-duration="1900">
            <img src={img} alt="" className='dp' />
        </div>
    </div></div>
   </section>
   </>
  )
}

export default About
