import React from 'react';
import Home from './Home';
import MarkdownPage from './MarkdownPage';
import dictionary from './dictionaries/en';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/en/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/en/HereToHelp.md';
import OpenCallCommunity from './markdown/en/OpenCallCommunity.md';
import AboutPage from './markdown/en/AboutPage.md';
import HowWeVetProjects from './markdown/en/HowWeVetProjects.md';
import FAQs from './markdown/en/FAQs.md';

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

    if (props.FAQsPage){
        return (
            <MarkdownPage
                t={dictionary}
                markdown={{
                    pageContent: FAQs,
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
