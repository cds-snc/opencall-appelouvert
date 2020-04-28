import React from 'react';
import Home from './Home';
import dictionary from './dictionaries/en';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/en/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/en/HereToHelp.md';
import OpenCallCommunity from './markdown/en/OpenCallCommunity.md';

export default function App() {

    return (
        <Home
            lang="en"
            t={dictionary}
            markdown={{
                HelpingGovernmentsRespond,
                HereToHelp,
                OpenCallCommunity
            }}
        />
    );
    
}
