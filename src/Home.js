import React from 'react';
import Bowser from "bowser";
import { GCFooter } from 'gc-tortilla';
import BrowserWarning from './components/BrowserWarning';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import NavButton from './components/NavButton';
import Catalog from './components/Catalog';
import { getPageLink } from './helpers';
import catalogs from './dictionaries/catalogs';
import codeShare from './images/codeShare.png';
import clipboard from './images/clipboard.png';
import gocFooterLogo from './images/gocFooterLogo.png';
import './Home.css';

export default function Home(props) {

    const browser = Bowser.getParser(window.navigator.userAgent);

    if (browser.getBrowserName() == "Internet Explorer"){
        return <BrowserWarning t={props.t}/>
    }

    console.log(props);

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
                    <NavButton t={props.t} tagClass="aboutPageLink" text="Learn more" path="about"/>
                    <NavButton t={props.t} tagClass="completedProjectsPageLink" text="Success stories" path="completed-projects"/>
                </BannerBlock>
                <h2 className="title">{props.t["Open Call Catalogue"]}</h2>
                <div className="catalogTabs">
                    <a className={props.catalog === catalogs.openSourceTools ? "active" : undefined} href={getPageLink(props.t.getLocale, "")}>{props.t["Open Source Tools"]}</a>
                    <a className={props.catalog === catalogs.digitalPolicies ? "active" : undefined} href={getPageLink(props.t.getLocale, "digital-policies")}>{props.t["Digital Policies"]}</a>
                </div>
                <Catalog t={props.t} catalog={props.catalog}/>
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
                >
                    <NavButton t={props.t} tagClass="faqPageLink" text="FAQs" path="faqs"/>
                </BannerBlock>
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