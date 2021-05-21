import React from 'react'
import {Button} from './Button'
import { Link } from 'react-router-dom'
import  './Section1.css'

function Section1({lightBg, topline, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart}) {
    return (
        <>
        <div className={lightBg ? 'home-sectoin1' : 'home-section1 darkBg'}>
            <div className = "container">
                <div className="row home-sect-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                <div className ="col">
                    <div className="home-text-wrapper">
                        <div className="top-line">{topline}</div>
                        <h1 className={lightText ? 'heading':'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home-subtitle': 'home-subtitle dark'} >{description}</p>
                        <Link to="/sign-up">
                            <button className='btn-sec'>{buttonLabel}</button>
                        </Link>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="home-img-wrapper">
                        <img src={img} alt={alt} className="home-img"/>
                    </div>
                </div>
                </div>      
          </div>
        </div>
        </>
    )
}

export default Section1;

