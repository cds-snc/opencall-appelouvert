import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {getMarkdown} from '../helpers';
import './BannerBlock.css';

export default function BannerBlock(props) {

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        getMarkdown(props.markdown, setMarkdown);
    },[])

    return (
        <div className="bannerBlock" style={props.colors}>
            <div className="content">
                <div className="markdown">
                    <ReactMarkdown source={markdown}></ReactMarkdown>
                    {props.children}
                </div>
                {props.image ?
                    <img src={props.image.src} alt={props.image.altText}/>
                : undefined}
            </div>
        </div>
    );
}