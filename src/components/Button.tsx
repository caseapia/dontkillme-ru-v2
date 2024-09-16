import { ReactNode, MouseEvent } from "react";
import './css/button.scss';

interface ButtonProps {
    text?: string;
    icon?: ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Primary = ({ text, icon, className, disabled = false, onClick }: ButtonProps) => {
    return (
        <button className={`primary ${className || ''}`} disabled={disabled} onClick={onClick}>
            {icon} {text}
        </button>
    );
};

export const Secondary = ({ text, icon, className, disabled = false, onClick }: ButtonProps) => {
    return (
        <button className={`secondary ${className || ''}`} disabled={disabled} onClick={onClick}>
            {icon} {text}
        </button>
    );
};

export const NoBorder = ({ text, icon, className, disabled = false, onClick }: ButtonProps) => {
    return (
        <button className={`no-border ${className || ''}`} disabled={disabled} onClick={onClick}>
            {icon} {text}
        </button>
    );
};

export const Blured = ({ text, icon, className, disabled = false, onClick }: ButtonProps) => {
    return (
        <button className={`blured ${className || ''}`} disabled={disabled} onClick={onClick}>
            {icon} {text}
        </button>
    )
}