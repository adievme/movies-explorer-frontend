import React from 'react'
import './Preloader.css'

const Preloader = ({ isOpen, isAuthPage, isMainPage }) => {
    return (
        <div className={`preloader ${isOpen && "preloader_visible"} ${isAuthPage && "preloader_center"} ${isMainPage && "preloader_margin"}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
