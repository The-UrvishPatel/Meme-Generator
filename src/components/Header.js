import React from "react";
import logo from "../images/logo.jpg"

export default function Header () {

    return (

        <div className="header-container">

            <div className="left">

                <img src={logo} alt="I can see you!" className="logo"/>
                <span>Your Meme Generator 😤</span>

            </div>

            <span>Me === Urvish 😈</span>

        </div>
    )
}