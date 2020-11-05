import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Catalog.css';

export default function Catalog(props) {

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSheetData();
    },[]);

    async function getSheetData() {
        setLoading(true);
        let data = await fetch(`https://spreadsheets.google.com/feeds/list/${props.catalog.sheetID}/${props.catalog.localeSheets[props.t.getLocale]}/public/values?alt=json`);
        data = await data.json();

        let resourceTypes = [...new Set(data.feed.entry.map(entry => entry.gsx$type.$t))];
        let sortedResources = Array.from(resourceTypes, resourceType => {
            return {
                type: resourceType,
                resources: data.feed.entry.filter(entry => entry.gsx$type.$t === resourceType)
            }
        });
        setResources(sortedResources);
        setLoading(false);
    }

    console.log(resources);

    return (
        <div className="catalog">
            {loading &&
                <div className="loadingContainer">
                    <Loader type="Circles" color="rgb(38, 55, 74)" height={80} width={80}/>
                </div>
            }
            {resources.map((resourceType, index) =>
                <div key={index} className="contentBox">
                    <h3 className="resourceType">{resourceType.type}</h3>
                    <div className="collection">
                        {resourceType.resources.map((resource, index) =>
                            <div key={index} className="resource">
                                <img src={resource.gsx$imageurl.$t} alt={resource.gsx$alttxt.$t}/>
                                {resource.gsx$frenchcaptions ? <figcaption>{resource.gsx$frenchcaptions.$t}</figcaption> : undefined}
                                {resource.gsx$codelink ?
                                    <React.Fragment>
                                        <h4>{resource.title.$t}</h4>
                                        <p>
                                            <b>{props.t["Live link:"] + " "}</b>
                                            <a href={resource.gsx$livelink.$t}>{resource.gsx$livelinktitle.$t}</a>
                                        </p>
                                        <p>
                                            <b>{props.t["Open source code:"] + " "}</b>
                                            <a href={resource.gsx$codelink.$t}>{resource.gsx$codelinktitle.$t}</a>
                                        </p>
                                    </React.Fragment>
                                :
                                    <a href={resource.gsx$livelink.$t}>
                                        <h4>{resource.title.$t}</h4>
                                    </a>
                                }
                            </div>
                        )}
                        {3 % resourceType.resources.length != 0 ?
                            <div className="resource"></div>
                        : undefined}
                    </div>
                </div>
            )}
        </div>
    );
}