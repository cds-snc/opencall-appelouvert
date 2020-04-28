import React from 'react';
import gocHeaderLogo from '../images/gocHeaderLogo.png';
import './Header.css'

export default function Header(props){
    return (
        <div className="header">
            <div className="content">
                <img className="gocHeaderLogo" src={gocHeaderLogo} alt="Government of Canada / Gouvernement du Canada"/>
                <div className="titleBox">
                    <h1>{props.t["Open Call"]}</h1>
                    <div className="alpha">{props.t["Alpha"]}</div>
                </div>
                <a className="languageToggle" href={props.t.getOppositeLocale === "fr" ? `/${props.t.getOppositeLocale}` : "/"}>{props.t.getOppositeLang}</a>
            </div>
        </div>
    );
}