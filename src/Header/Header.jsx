import React from 'react'
import Resume from '../assets/resume.pdf'

const Header = () => {
    return (
        <>
            <section className='my-5' id='home'>
                <div className="container">
                    <div className=" d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 col-12">
                            <p className='opac m-0'  data-aos="fade-up" data-aos-duration="1000">Hi 👋,I'm</p>
                            <h4 className='first name' data-aos="fade-up" data-aos-duration="1000">Kavitha</h4>
                            <p className='front-end' data-aos="fade-up" data-aos-duration="1000">Front End Developer</p>
                            <p data-aos="fade-up" data-aos-duration="1000">I'm a Full end developer with a focus on web development </p>
                          <a href={Resume} download='resume'>  <button className='px-5 py-2 border contact' dow data-aos="fade-up" data-aos-duration="1000">Contact</button></a>
                        </div>
                        <div className="  col-lg-5" data-aos="fade-up" data-aos-duration="1000">
                            <img src="https://portfolio-5678.netlify.app/static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
