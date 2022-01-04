import React from 'react';
import { useState } from 'react';
import './AboutPage.css';
import ReactPlayer from 'react-player/youtube';
import {MdPlayCircleFilled} from 'react-icons/md'

export const AboutPage = () => {

    const [isPressPlay, pressPlay] = useState(false);
    return (
        <div className='AboutPageMainContainer'>
            <div className='image1'>
                Ableton
            </div> 
            <span className='Content-Header'>
                We make <span className='Purple'> Live</span>, <span className='Purple'>Push</span> and <span className='Purple'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
            </span>
            <span className='Content'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</span>
            <div className='Collage1'>
                <div className='image2'></div> 
                <div className='image3'></div> 
            </div>
            <span className='Content-Header'>
            Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
            </span>
            <span className='Content'>
            We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
            </span>
            <ReactPlayer
                className="thumbnailImage"
                url="https://youtu.be/9SbnhgjeyXA"
                width="51.33vw"
                height="28.89vw"
                playing
                playIcon={<MdPlayCircleFilled  size={100} style={{fill: "#0000ff"}}/>}
                light="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&ixjsv=1.1.3&q=50&w=748"
            />
            <p className='caption'>Why Ableton - Juanpe Bolivar</p>
            <span className='Content-Header'>
            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
            </span>
            <span className='Content'>
            Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
            </span>
            <div className='Collage2-Background'>
            </div>
            <div className='Collage2-Container'>
                <div className='Collage2-wBAck'>
                    <div className='image5'></div> 
                    <div className='image6'></div>
                </div>
                <div className='image7'></div>
            </div>
            <span className='Content-Header'>
            We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
            </span> 
            <span className='Content'>
            Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
            </span>
            <div className='image8'></div>
            <span className='Content-Header'>
            We’re passionate about what we do, but we’re equally passionate about improving who we are.
            </span>
            <span className='Content'>
            We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
            </span>
            <span className='Content-pt2'>
            Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
            </span>
            <div className='Collage3'>
                <div className='image9'></div> 
                <div className='image10'></div> 
            </div>
            <span className='Content-Header'>
            We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
            </span>
            <span className='Content'>
            If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
            </span>
            <div className='Collage4'>
                <div className='image11'></div> 
                <div className='teaser-Header'>
                    <span className='teaserContent'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</span>
                    <span className='teaser-Link'> See latest jobs  ></span>
                </div>
            </div>
            
        </div>
    )
}
