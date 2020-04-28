import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './BannerBlock.css';

export default function BannerBlock(props) {

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch(props.markdown).then((response) => response.text()).then((string) => {
            setMarkdown(string);
        });
    },[])

    return (
        <div className="bannerBlock" style={props.colors}>
            <div className="content">
                <ReactMarkdown className="markdown" source={markdown}/>
                {props.image ?
                    <img src={props.image.src} alt={props.image.altText}/>
                : undefined}
            </div>
        </div>
    );
}