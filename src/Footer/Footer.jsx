import React from 'react'
import './Footer.css'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'


const Footer = () => {
    return (
        <>
            <footer className='footer py-5 py-lg-4'>
                <section>
                    <div className="container">
                        <div className='text-center d-lg-flex justify-content-lg-between align-items-lg-center'>
                            <div>
                                <h4><span>K</span>avitha</h4>
                            </div>
                            <div>
                                <p>This site was made with <img src='https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain' alt="" className='mx-1 logoo' style={{ height: '26px' }} />and a lot of❤️</p>
                            </div>
                            <div className=' '>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div className="linkedin me-2 ">
                                        <a href="https://www.linkedin.com/in/kavitha-a-173588244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                                            <img src="	https://portfolio-5678.netlify.app/static/media/linkedin.f249b38224ca41a0b909.png" className='img-fluid links' alt="" />
                                        </a>
                                    </div>
                                    <div className="git-hub ">
                                        <a href="https://github.com/kavi307">
                                            <img src="https://portfolio-5678.netlify.app/static/media/github.a855c3975c028d8069f5.png" className='img-fluid links' alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
