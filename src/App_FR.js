import React from 'react';
import Home from './Home';
import CompletedProjects from './CompletedProjects';
import MarkdownPage from './MarkdownPage';
import dictionary from './dictionaries/fr';
import './App.css';

// Markdown imports
import HelpingGovernmentsRespond from './markdown/fr/HelpingGovernmentsRespond.md';
import HereToHelp from './markdown/fr/HereToHelp.md';
import OpenCallCommunity from './markdown/fr/OpenCallCommunity.md';
import AboutPage from './markdown/fr/AboutPage.md';
import FAQs from './markdown/fr/FAQs.md';
import CompletedProjectsHeader from './markdown/fr/CompletedProjectsHeader.md';

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

    if (props.completedProjectsPage){
        return (
            <CompletedProjects
                t={dictionary}
                markdown={{
                    CompletedProjectsHeader,
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
