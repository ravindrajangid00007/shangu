import React from 'react'
import './Intro.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGooglePlusCircle, AiFillInstagram } from 'react-icons/ai';
function Intro() {
    return (
        <>
            <div className="introBox">
                <div className="introWelcome">
                    <div className="testing">
                        <h1><span className="color-white">Welcome to </span><span className="color-yellow">Legends of Shangu</span></h1>
                        <p className="color-white">Countdown to Public Sale</p>
                        <div className="countdownBox">
                            <div className="time-string">
                                <div className="time color-yellow">
                                    04
                                </div>
                                <div className="string color-white">
                                    Days
                                </div>
                            </div>
                            <div className="colon color-yellow">
                                :
                            </div>
                            <div className="time-string">
                                <div className="time color-yellow">
                                    22
                                </div>
                                <div className="string color-white">
                                    Hours
                                </div>
                            </div>
                            <div className="colon color-yellow">
                                :
                            </div>
                            <div className="time-string">
                                <div className="time color-yellow">
                                    20
                                </div>
                                <div className="string color-white">
                                    Minutes
                                </div>
                            </div>
                            <div className="colon color-yellow">
                                :
                            </div>
                            <div className="time-string">
                                <div className="time color-yellow">
                                    22
                                </div>
                                <div className="string color-white">
                                    Seconds
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socialIcons">
                    <BsFacebook />
                    <AiFillGooglePlusCircle />
                    <AiFillInstagram />
                </div>
            </div>
        </>
    )
}

export default Intro
