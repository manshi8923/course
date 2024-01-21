import React, { useState } from 'react';
import { HiShieldCheck } from "react-icons/hi";
import person from '../images/person.webp'
import {MdOutlineArrowDropDown} from 'react-icons/md';
import '../styles/Home.css';
import SingleQuestion from '../components/Question.js';
import sticker from '../images/sticker.webp';
import img1 from '../images/01.png';
import img2 from '../images/02.png';
import img3 from '../images/03.png';
import data from '../data.js'
const Home = () => {
    const [className,setClassName]=useState("null");
    const [questions,setQuestions]=useState(data);
    return (
        <div className='home'>
            <div className='home1'>
                <div className='content'>
                    <h1>Create and Launch Your Online Course</h1>
                    <h3>in 30 minutes</h3>
                    <p>
                        First Choice of the Online Coaches and Trainers for Transforming their Dreams into Reality..
                    </p>
                    <button className='btn'>Get Started (No credit card required)</button>
                </div>
                <div className='sticker'>
                    <img src={sticker}></img>
                </div>
            </div>
            <span className='card'>
               <figure>
               <img src={img1}></img>
               <figcaption>Create the Course</figcaption>
               </figure>
               <figure>
               <img src={img2}></img>
               <figcaption>Identify your Niche</figcaption>
               </figure>
               <figure>
               <img src={img3}></img>
               <figcaption>Create Irresistable Offer</figcaption>
               </figure>
            </span>
            <div className='home2'>
                <div className='heading'>
                <h1 className='heading1'>Experience The Full Power of Coaches Valley AI Platform
that Delivers </h1>
<h1 className='heading2'>Premium Results in seconds.</h1>
                <h1 className='big'>1000+</h1>
                <h2 className='heading3'>Online Coaches and Trainers Chose Coaches Valley AI</h2>
                </div>
                <div className='checkbox'>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                    <button className='check'>Find Niche</button>
                </div>
            </div>
            <div className='home3'>
                <h1>Are You Ready To Launch Your Online Course ?</h1>
                <h4>Join the Community of Successful Coaches</h4>
                <button className='hom'>Yes,I do</button>
                <div className='cardes'>
                    <div className='crd'>
                    <figure>
                        <img className='person' src={person}></img>
                        <figcaption>Arya Bharti</figcaption>
                        <figcaption>Energy Healing Coach</figcaption>
                        </figure>
                    </div>
                    <div className='crd'>
                    <figure>
                        <img className='person' src={person}></img>
                        <figcaption>Arya Bharti</figcaption>
                        <figcaption>Energy Healing Coach</figcaption>
                        </figure>
                    </div>
                    <div className='crd'>
                        <figure>
                        <img className='person' src={person}></img>
                        <figcaption>Arya Bharti</figcaption>
                        <figcaption>Energy Healing Coach</figcaption>
                        </figure>  
                    </div>
                    <div className='crd'>
                        <figure>
                        <img className='person' src={person}></img>
                        <figcaption>Arya Bharti</figcaption>
                        <figcaption>Energy Healing Coach</figcaption>
                        </figure>  
                    </div>
                </div>
            </div>
            <div className='home4'>
                <h1 className='span1'>Frequently <span className='span2'>Asked questions.</span> </h1>

                <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
            </div>
        </div>
    )
}
export default Home;