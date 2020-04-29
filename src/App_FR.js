import React from 'react';
import Home from './Home';
import About from './About';
import dictionary from './dictionaries/fr';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/fr/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/fr/HereToHelp.md';
import OpenCallCommunity from './markdown/fr/OpenCallCommunity.md';

export default function App(props) {

    if (props.aboutPage){
        return (
            <About
                lang="fr"
                t={dictionary}
                markdown={{
                    OpenCallCommunity
                }}
            />
        );    
    }

    return (
        <Home
            lang="fr"
            t={dictionary}
            markdown={{
                HelpingGovernmentsRespond,
                HereToHelp,
                OpenCallCommunity
            }}
        />
    );
    
}
