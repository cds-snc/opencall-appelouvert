import React from 'react';
import Home from './Home';
import dictionary from './dictionaries/fr';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/fr/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/fr/HereToHelp.md';
import OpenCallCommunity from './markdown/fr/OpenCallCommunity.md';

export default function App() {

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
