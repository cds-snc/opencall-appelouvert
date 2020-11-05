import React from 'react';
import {getPageLink} from '../helpers';
import './NavButton.css';

export default function NavButton(props) {

    return (
        <div className="navButton">
            <a className={props.tagClass} href={getPageLink(props.t.getLocale, props.path)}>
                <p>{props.t[props.text]}</p>
            </a>
        </div>    
    );
}