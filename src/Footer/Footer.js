import React from 'react'
import './Footer.css'
import ableton from './ableton.svg'
import socialmedia from './socialmedia.png'
import abletonlogo from '../Navbar/abletonlogo.svg'

const Footer = () => {
    return (
        <div className='FooterContainer'>    
            <img src={ableton} width={200}/>
            <div className='FooterLinks'>
                <div className='FooterRow'>
                    <div>
                        <ul>
                            <li>Register Live or Push ></li>
                            <li>About Ableton ></li>
                            <li>Jobs ></li>
                            <img className='FootersocialMedia' src={socialmedia} width={200}/>
                        </ul>
                    </div>
                    <div>
                        <ul className='Footer-Block2'>
                            <li style={{fontWeight: '600'}}>Education</li>
                            <li>Offers for students and teachers ></li>
                            <li>Ableton for the Classroom ></li>
                            <li>Ableton for Colleges and Universities ></li>
                        </ul>
                    </div>
                    <div className='Footer-Block3'>
                        <div style={{fontWeight: '600'}}>Sign up to our newsletter</div>
                        <div>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
                        <form className='FooterSignUpForm'>
                            <input type='text' name="Email" placeholder='Email Address'>
                            </input>
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='FooterRow'>
                    <div>
                        <ul>
                            <li style={{fontWeight: '600'}}>Community</li>
                            <li>Find Ableton User Groups ></li>
                            <li>Find Certified Training ></li>
                            <li>Become a Certified Trainer ></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='Footer-Block2' style={{marginLeft:'-10.8vw'}}>
                            <li style={{fontWeight: '600'}}>Distributors</li>
                            <li>Find Distributors ></li>
                            <li>Try Push in-store ></li>
                        </ul>
                    </div>
                    <div className='Footer-Block3'>
                        <div style={{fontWeight: '600'}}>Language and Location</div>
                        <form className='FooterLocationForm'>
                            <select className='LanguageDropdown' placeholder='English'>
                                <option>English</option>
                            </select>
                            <select className='LocationDropdown'>
                                <option>Kuwait</option>
                            </select>   
                        </form>
                    </div>
                </div>
                <div className='FooterEnd'>
                    <ul>
                        <li>Contact Us</li>
                        <li>Press Resources</li>
                        <li>Legal Info</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Imprint</li>
                    </ul>
                    <ul style={{marginLeft:'44%'}}>
                        <li>Made In Berlin</li>
                        <img src={abletonlogo}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
