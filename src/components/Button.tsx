import { ReactNode } from "react";
import './css/button.scss';

interface ButtonProps {
    text: string;
    icon?: ReactNode;
    disabled?: boolean;
    className?: string;
}

export const Primary = ({ text, icon, className, disabled = false }: ButtonProps) => {
    return (
        <button className={`primary ${className || ''}`} disabled={disabled}>
            {icon} {text}
        </button>
    );
};

export const Secondary = ({ text, icon, className, disabled = false }: ButtonProps) => {
    return (
        <button className={`secondary ${className || ''}`} disabled={disabled}>
            {icon} {text}
        </button>
    );
};

export const NoBorder = ({ text, icon, className, disabled = false }: ButtonProps) => {
    return (
        <button className={`no-border ${className || ''}`} disabled={disabled}>
            {icon} {text}
        </button>
    );
};