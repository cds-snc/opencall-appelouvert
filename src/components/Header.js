import React from 'react';
import gocHeaderLogo from '../images/gocHeaderLogo.png';
import './Header.css'

export default function Header(props){

    function getHomeURL() {
        return props.t.getLocale != "en" ? `/${props.t.getLocale}/` : "/"; 
    }

    function getLangToggleLink() {
        console.log(window.location.hash);
        return props.t.getLocale === "en" ? `/${props.t.getOppositeLocale}/${window.location.hash}` : `/${window.location.hash}`;
    }

    return (
        <div className="header">
            <div className="content">
                <img className="gocHeaderLogo" src={gocHeaderLogo} alt="Government of Canada / Gouvernement du Canada"/>
                <div className="titleBox">
                    <a href={getHomeURL()}>
                        <h1>{props.t["Open Call"]}</h1>
                    </a>
                    <div className="alpha">{props.t["Alpha"]}</div>
                </div>
                <a className="languageToggle" href={getLangToggleLink()}>{props.t.getOppositeLang}</a>
            </div>
        </div>
    );
}