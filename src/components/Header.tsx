import './css/header.scss';
import { NoBorder } from './Button';
import { GrProjects } from "react-icons/gr";
import { FaBook, FaGithub } from 'react-icons/fa';
import { TiWorld } from "react-icons/ti";
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-links">
                    <div className="header-links__item">
                        <Link href="#aboutSite"><NoBorder text='About this site' icon={ <TiWorld className='web-icon' /> } /></Link>
                    </div>
                    <div className="header-links__item">
                        <Link href="#about"><NoBorder text='About' icon={ <FaBook /> } /></Link>
                    </div>
                    <div className="header-links__item">
                        <Link href="#projects"><NoBorder text='Projects' icon={ <GrProjects /> } /></Link>
                    </div>
                    <div className="header-links__item src">
                        <a href="" target="_blank" rel="noopener noreferrer"><NoBorder icon={ <FaGithub /> } className='source' text='Source' /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}