import React from 'react';
import { GCFooter } from 'gc-tortilla';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import NavButton from './components/NavButton';
import Catalog from './components/Catalog';
import codeShare from './images/codeShare.png';
import clipboard from './images/clipboard.png';
import gocFooterLogo from './images/gocFooterLogo.png';

export default function Home(props) {

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
                    <NavButton t={props.t} tagClass="completedProjectsPageLink" text="Completed projects" path="completed-projects"/>
                </BannerBlock>
                <Catalog t={props.t}/>
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