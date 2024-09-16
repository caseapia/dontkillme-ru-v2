import React from 'react';
import '../css/marquee.scss'

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, className }) => {
    return (
        <div className="marquee-container">
            <div className={`marquee ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Marquee;