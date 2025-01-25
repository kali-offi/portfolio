import React, { useState } from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const handsumbit=(e)=>{
        e.preventDefault();

        const serviceId ='service_e6uilyb';
        const templateId='template_hgrlf7r';
        const publicKey='ZaYsY5zX24Y4a4Eln';
        // const serviceId ='service_1wgrjim';
        // const templateId='template_0gcik8v';
        // const publicKey='p7CA7-rrp4-MgVPqY';

        const templateParams={
            from_name:name,
            from_email:email,
            to_name:'kavitha',
            message:message,

        };
        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response)=>{
            console.log('Email sent succcess',response);
            setName('')
            setEmail('')
            setMessage('')   
        })
        .catch((error)=>{
            console.error('error sending',error);           
        })


    }
    return (
        <>
            <section id='contact'>
                <div className="container">
                    <header className='text-center first my-2'>
                        <h3 >Contact Me</h3>
                        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
                    </header>
                    <div className='d-lg-flex row   justify-content-center'>
                        <div  data-aos="fade-left" data-aos-duration="1500" className='contact my-3 mx-lg-2 text-center shadow col-lg-5 d-lg-inline'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg></div>

                            <a href="mailto:ajkavitha7@gmail.com">ajkavitha7@gmail.com</a>
                        </div>
                        <div  data-aos="fade-right" data-aos-duration="1900" className='contact my-3 mx-lg-2 text-center shadow col-lg-5 d-lg-inline'>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg></div>

                            <a href="tel:+918248319414">8248319414</a>
                        </div>
                    </div>
                    <section className='my-5'>
                        <h5 className='text-center mb-4 first'>Get in touch using the form below</h5>
                        <Form onSubmit={handsumbit} className='text-center d-flex flex-column justify-content-center align-items-center'>
                            <Form.Group className="mb-3 col-lg-6 col-12 " controlId="formBasicEmail" >
                                <input className='input-mail col-lg-8 col-12 ' type="text" name="user_name"
                            value={name} placeholder='Enter name'
                            onChange={(e)=>setName(e.target.value)} /> 
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-12 " controlId="formBasicEmail">
                                <input className='col-lg-8 col-12  input-mail' name="user_email" 
                              value={email} 
                              onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8 col-12 " >
                                    <textarea
                                        className='input-mail col-lg-6 col-12 '
                                        as="textarea"
                                        placeholder="comment here"
                                        style={{ height: '140px' }}
                                        label="Comments"
                                    />  
                            </Form.Group>
                            <Button  data-aos="fade-up" data-aos-duration="1200" className='send' type="submit" >
                                SEND MESSAGE
                            </Button>
                        </Form>
                        {/* <form  onSubmit={handsumbit}>
                            
                            <input type="text" name="user_name"
                            value={name} placeholder='Enter name'
                            onChange={(e)=>setName(e.target.value)} />
                            <input type="email" name="user_email" 
                              value={email} placeholder='Enter your email'
                              onChange={(e)=>setEmail(e.target.value)}/>
                            <textarea name="message"   
                              value={message} placeholder='comment'
                              onChange={(e)=>setMessage(e.target.value)} style={{height:'200px'}}/>
                                <Form.Group className="mb-3 col-lg-6 col-12 " >
                                    <textarea
                                        className='input-mail'
                                        as="textarea"
                                        style={{ height: '140px' }}
                                        label="Comments"
                                        name="message"   
                                        value={message} placeholder='comment'
                                        onChange={(e)=>setMessage(e.target.value)}
                                    />  
                               
                            </Form.Group>
                              <button type='submit'>Send</button>
                        </form> */}
                        
                    </section>


                </div>
            </section>
        </>

    )
}
export default Contact



