import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import { GCFooter } from 'gc-tortilla';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import {getMarkdown} from './helpers';
import gocFooterLogo from './images/gocFooterLogo.png';

export default function About(props) {

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        getMarkdown(props.markdown.AboutPage, setMarkdown);
    },[])

    return (
        <div className="About">
            <Header t={props.t}/>
            <ReactMarkdown className="markdown" source={markdown}/>
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
            />
        </div>
    );
}