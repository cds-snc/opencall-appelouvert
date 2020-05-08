import React from 'react';
import './NavButton.css';

export default function NavButton(props) {

    function getPageLink(path) {
        return props.t.getLocale != "en" ? `/${props.t.getLocale}/#/${path}` : `/#/${path}`;
    }

    return (
        <div className="navButton">
            <a href={getPageLink(props.path)}>
                <p>{props.t[props.text]}</p>
            </a>
        </div>    
    );
}