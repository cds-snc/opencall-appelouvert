import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App_EN from './App_EN';
import App_FR from './App_FR';
import catalogs from './dictionaries/catalogs';
import * as serviceWorker from './serviceWorker';

if (document.documentElement.lang === "fr"){
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Route exact path="/" component={() => <App_FR catalog={catalogs.openSourceTools}/>}/>
                <Route path="/digital-policies" component={() => <App_FR catalog={catalogs.digitalPolicies}/>}/>
                <Route path="/about" component={() => <App_FR aboutPage={true}/>}/>
                <Route path="/faqs" component={() => <App_FR FAQsPage={true}/>}/>
                <Route path="/completed-projects" component={() => <App_FR completedProjectsPage={true}/>}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
else {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Route exact path="/" component={() => <App_EN catalog={catalogs.openSourceTools}/>}/>
                <Route path="/digital-policies" component={() => <App_EN catalog={catalogs.digitalPolicies}/>}/>
                <Route path="/about" component={() => <App_EN aboutPage={true}/>}/>
                <Route path="/faqs" component={() => <App_EN FAQsPage={true}/>}/>
                <Route path="/completed-projects" component={() => <App_EN completedProjectsPage={true}/>}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
