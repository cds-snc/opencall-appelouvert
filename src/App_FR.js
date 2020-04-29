import React from 'react';
import Home from './Home';
import About from './About';
import dictionary from './dictionaries/fr';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/fr/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/fr/HereToHelp.md';
import OpenCallCommunity from './markdown/fr/OpenCallCommunity.md';
import AboutPage from './markdown/fr/AboutPage.md';

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
