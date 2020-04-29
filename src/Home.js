import React from 'react';
import { GCFooter } from 'gc-tortilla';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import codeShare from './images/codeShare.png';
import clipboard from './images/clipboard.png';
import gocFooterLogo from './images/gocFooterLogo.png';
import './Home.css';

export default function Home(props) {

    function getAboutLink() {
        return props.t.getLocale != "en" ? `/${props.t.getLocale}/#/about` : "/#/about";
    }

    return (
        <div className="home">
            <Header t={props.t}/>
                <BannerBlock
                    markdown={props.markdown.HelpingGovernmentsRespond}
                    image={{
                        src: codeShare,
                        altText: props.t.codeShareAltText
                    }}
                    colors={{
                        backgroundColor: "#26374a",
                        color: "white"
                    }}
                >
                    <div className="aboutButton">
                        <a href={getAboutLink()}>
                            <p>{props.t["Learn more"]}</p>
                        </a>
                    </div>
                </BannerBlock>
                <h2>{props.t["Open Call Catalogue"]}</h2>
                <BannerBlock
                    markdown={props.markdown.HereToHelp}
                    image={{
                        src: clipboard,
                        altText: props.t.clipboardAltText
                    }}
                    colors={{
                        backgroundColor: "#eee",
                        color: "black"
                    }}
                />
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