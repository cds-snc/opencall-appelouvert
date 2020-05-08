import React from 'react';
import Home from './Home';
import MarkdownPage from './MarkdownPage';
import dictionary from './dictionaries/fr';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/fr/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/fr/HereToHelp.md';
import OpenCallCommunity from './markdown/fr/OpenCallCommunity.md';
import AboutPage from './markdown/fr/AboutPage.md';
import HowWeVetProjects from './markdown/fr/HowWeVetProjects.md';

export default function App(props) {

    if (props.aboutPage){
        return (
            <MarkdownPage
                t={dictionary}
                markdown={{
                    pageContent: AboutPage,
                    OpenCallCommunity
                }}
            />
        );    
    }

    if (props.vetGuidePage){
        return (
            <MarkdownPage
                t={dictionary}
                markdown={{
                    pageContent: HowWeVetProjects,
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
