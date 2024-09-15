"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";

interface SectionProps {
    title: string,
}

const SectionTitle: React.FC<SectionProps> = ({ title }) => {
    return <h4>{title}</h4>
}

export default function Area() {
    const [aboutTitle] = useState('About me');
    const [projectsTitle] = useState('Projects');
    const [aboutSiteTitle] = useState('About this site')
    
    return (
        <main>
            <Container>
                <div className="container__item" id="aboutSite">
                    <SectionTitle title={aboutSiteTitle} />
                    This site used by me like my portfolio and CV <span className="span__muted">(in the future)</span>. If you are here - you found this site among ~2 billions sites in the <span className="span__underlined" title="World Wide Web">WWW</span> or I sended it for you. Please, if you have any suggestions for this site, DM me in Discord or some my socials you have.
                </div>
                <div className="container__item" id="about">
                    <SectionTitle title={aboutTitle} />
                    I have been interested in web development since 15 years, but never attempted to create websites until I almost 16 because I never knew where to start. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine.
                </div>
                <div className="container__item" id="projects">
                    <SectionTitle title={projectsTitle} />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam repellendus placeat laudantium reprehenderit odio possimus a corporis iure, nisi architecto cumque, quas, aperiam dolore. Incidunt magni aperiam officiis rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis adipisci maxime facere rerum aperiam ducimus ipsam, assumenda magni at accusantium, deserunt illo distinctio, itaque repellat id nulla! Ad, nemo provident.
                </div>
            </Container>
        </main>
    )
}