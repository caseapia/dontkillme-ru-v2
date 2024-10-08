"use client";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Secondary, Blured } from '../components/Button';
import { FaYoutube, FaDiscord, FaGithub, FaEarthEurope, FaBook } from "react-icons/fa6";
import './css/page.scss';
import './css/marquee.scss';
import { Container } from "react-bootstrap";
import { BsDiscord } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import React from '../../public/images/react.svg';
import JavaScript from '../../public/images/javascript.svg';
import Bootstrap from '../../public/images/bootstrap.svg';
import CSS from '../../public/images/css.svg';
import HTML from '../../public/images/html.webp';
import Next from '../../public/images/next.svg';
import SASS from '../../public/images/sass.svg';
import Tailwind from '../../public/images/tailwind.svg';
import Vite from '../../public/images/vite.svg';
import TypeScript from '../../public/images/typescript.svg';
import Cloudflare from '../../public/images/cloudflare.svg';
import VSC from '../../public/images/vscode.svg';
import xenForo from '../../public/images/xenForo.svg';
import Git from '../../public/images/git.svg';
import GitHub from '../../public/images/github.svg';
import NPM from '../../public/images/npm.svg';
import { Card, CardHeader, CardFooter, CardImage } from '../components/Card';
import tchecker from '../../public/images/trainingchecker.svg'

export default function Main() {
    
    return (
        <div id="root">
            <Header />
            <main>
                <Container>
                    <h1>About this site</h1>
                    <div className="container__item" id="aboutSite">
                        This site used by me like my portfolio and CV <span className="span__muted">(in the future)</span>. If you are here - you found this site among ~2 billions sites in the <span className="span__underlined" title="World Wide Web">WWW</span> or I sended it for you. Please, if you have any suggestions for this site, DM me in <a href='https://discordapp.com/users/531462564304125962' target='_blank'><BsDiscord /> Discord</a> or some my socials you have.
                        <div className="button-container">
                            <Secondary className='nbrdd1v' icon={ <FaYoutube className='icon youtube' /> } onClick={() => window.open('https://www.youtube.com/@mdg.dontkillme', '_blank')} />
                            <Secondary className='nbrdd1v' icon={ <FaDiscord className='icon discord' /> } onClick={() => window.open('https://discord.com/users/531462564304125962', '_blank')} />
                            <Secondary className='nbrdd1v' icon={ <FaGithub className='icon github' /> } onClick={() => window.open('https://github.com/caseapia', '_blank')} />
                        </div>
                    </div>
                    <h1>About me</h1>
                    <div className="container__item" id="about">
                        <h4>Overall</h4>
                        I have been interested in web development since 15 years, but never attempted to create websites until I almost 16 because I never knew where to start. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine.
                        <div className="insidecontainer">
                            <div className="insidecontainer__item">
                                <h3>Frontend</h3>
                                <Marquee pauseOnHover speed={100}>
                                    <div className="marquee-container__item" onClick={() => window.open('https://react.dev/', '_blank')}><Image src={ React } alt='' width={30} draggable={false} /> React</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}><Image src={ JavaScript } alt='' width={30} draggable={false} /> JavaScript</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://www.typescriptlang.org/', '_blank')}><Image src={ TypeScript } alt='' width={30} draggable={false} /> TypeScript</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://www.w3schools.com/html/', '_blank')}><Image src={ HTML } alt='' width={30} draggable={false} /> HTML</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://www.w3schools.com/css/', '_blank')}><Image src={ CSS } alt='' width={30} draggable={false} /> CSS</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://sass-lang.com/', '_blank')}><Image src={ SASS } alt='' width={30} draggable={false} /> SCSS</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://getbootstrap.com/', '_blank')}><Image src={ Bootstrap } alt='' width={30} draggable={false} /> Bootstrap</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://tailwindcss.com/', '_blank')}><Image src={ Tailwind } alt='' width={30} draggable={false} /> Tailwind</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://vitejs.dev/', '_blank')}><Image src={ Vite } alt='' width={25} draggable={false} /> Vite</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://nextjs.org/', '_blank')}><Image src={ Next } alt='' width={25} draggable={false} /> NextJS</div>
                                </Marquee>
                            </div>
                            <div className="insidecontainer__item">
                                <h3>Other Technologies</h3>
                                <Marquee pauseOnHover speed={100}>
                                    <div className="marquee-container__item" onClick={() => window.open('https://www.cloudflare.com/', '_blank')}><Image src={ Cloudflare } alt='' width={30} draggable={false} /> Cloudflare</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://code.visualstudio.com/', '_blank')}><Image src={ VSC } alt='' width={30} draggable={false} /> Visual Studio Code</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://xenforo.com/', '_blank')}><Image src={ xenForo } alt='' width={30} draggable={false} /> xenForo</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://git-scm.com/', '_blank')}><Image src={ Git } alt='' width={30} draggable={false} /> Git</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://github.com/', '_blank')}><Image src={ GitHub } alt='' width={30} draggable={false} /> GitHub</div>
                                    <div className="marquee-container__item" onClick={() => window.open('https://www.npmjs.com/', '_blank')}><Image src={ NPM } alt='' width={30} draggable={false} /> NPM</div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <h1>About my projects</h1>
                    <div className="container__item" id="projects">
                        Sometimes I work in closed projects with NDA, but some of my projects are open on my GitHub. If you need more information about my experience and commercial experience, feel free to write to me on any social, I will reply to you as soon as possible!<br />
                        Anyway, here I can show you some of my opened projects.
                        <div className="card-container">
                            <Card>
                                <CardHeader>
                                    <CardImage src={ tchecker } alt='Training Checker' draggable={false} className='bordered-image' />
                                    <h2>TRAINING CHECKER</h2>
                                </CardHeader>
                                <p>TRAINING CHECKER is a website for working with the server API in SAMP, which allows you to view publicly available player account data in a user-friendly interface.</p>
                                <CardFooter>
                                    <div className="button-container centered">
                                        <a href='https://caseapia.github.io/trainingchecker/' target='_blank'><Blured text='Visit Website' icon={ <FaEarthEurope /> } /></a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    )
}