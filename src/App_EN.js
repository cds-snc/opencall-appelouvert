import React from 'react';
import Home from './Home';
import About from './About';
import dictionary from './dictionaries/en';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/en/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/en/HereToHelp.md';
import OpenCallCommunity from './markdown/en/OpenCallCommunity.md';
import AboutPage from './markdown/en/AboutPage.md';

export default function App(props) {

    if (props.aboutPage){
        return (
            <About
                t={dictionary}
                markdown={{
                    AboutPage,
                    OpenCallCommunity
                }}
            />
        );    
    }

    return (
        <Home
            t={dictionary}
            markdown={{
                HelpingGovernmentsRespond,
                HereToHelp,
                OpenCallCommunity
            }}
        />
    );
    
}
