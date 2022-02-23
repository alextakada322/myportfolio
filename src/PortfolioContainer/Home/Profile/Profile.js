import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div classNmae='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://github.com/alextakada322'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/alex-takada-b9385b1a5/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Alex</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev 😎", 
                                    1000, 
                                    "Full Stack Developer 💻", 
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.

                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='#'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}
