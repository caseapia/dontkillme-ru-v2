import './css/card.scss';
import React, { ReactNode, MouseEvent } from "react";
import Image from 'next/image';

interface Props {
    className?: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    children?: ReactNode;
}

interface CardHeaderProps {
    children?: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return <div className="card__header">{children}</div>;
};

interface CardFooterProps {
    children?: ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
    return <div className="card__footer">{children}</div>;
};

interface CardImageProps {
    src: any;
    className?: string;
    alt?: any;
    draggable?: boolean,
}

export const CardImage: React.FC<CardImageProps> = ({ src, className, alt, draggable = true }) => {
    return <Image src={src} alt={`${alt}`} className={`${className}`} width={330} draggable={draggable} />
}

export const Card: React.FC<Props> = ({ className, onClick, children }) => {
    const header = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === CardHeader);
    const footer = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === CardFooter);
    const image = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === CardImage);
    const body = React.Children.toArray(children).filter(child => !React.isValidElement(child) || (child.type !== CardHeader && child.type !== CardFooter));

    return (
        <div className={`card ${className}`} onClick={onClick}>
            {image}
            {header}
            <div className="card__body">
                {body}
            </div>
            {footer}
        </div>
    );
};