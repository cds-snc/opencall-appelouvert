import React, { useState, useEffect } from 'react';
import { GCFooter } from 'gc-tortilla';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import gocFooterLogo from './images/gocFooterLogo.png';
import './CompletedProjects.css';

export default function CompletedProjects(props) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    async function getData() {
        let data = await fetch(`https://spreadsheets.google.com/feeds/list/1FJcVpT5XJ-ASi5AQ3kehLeR-AjfAPOXqpUSrj-Kc8m4/${props.t.getCompletedProjectsSheetID}/public/values?alt=json`);
        data = await data.json();

        setProjects(data.feed.entry);
    }

    return (
        <div className="home">
            <Header t={props.t}/>
            <BannerBlock
                markdown={props.markdown.CompletedProjectsHeader}
                colors={{
                    backgroundColor: "#26374a",
                    color: "white"
                }}
            />
            <div className="completedProjectList">
                {projects.map((project, index) =>
                    <div key={index} className="completedProject">
                        <img src={project.gsx$featuredimageurl.$t} alt={project.gsx$featuredimagealttext.$t}/>
                        <h4>{project.gsx$title.$t}</h4>
                        <p>{project.gsx$bodycopy.$t}</p>
                        <div>
                            {project.gsx$readmorelinkurl.$t != "" ?
                                <a href={project.gsx$readmorelinkurl.$t}>{project.gsx$readmorelinktitle.$t}</a>
                            : undefined}
                            {project.gsx$viewthetoollinkurl.$t != "" ?
                                <a href={project.gsx$viewthetoollinkurl.$t}>{project.gsx$viewthetoollinktitle.$t}</a>
                            : undefined}
                        </div>
                    </div>
                )}
            </div>
            <BannerBlock
                markdown={props.markdown.OpenCallCommunity}
                colors={{
                    backgroundColor: "#26374a",
                    color: "white"
                }}
            />
            <GCFooter
                theme={"light"}
                FIP={{
                    image: gocFooterLogo,
                    altText: "Symbol of the Government of Canada / Symbole du gouvernement du Canada"
                }}
                links={[
                    {
                        url: props.t.getPrivacyLink,
                        label: props.t["Privacy"]
                    }
                ]}
            />
        </div>
    );
}