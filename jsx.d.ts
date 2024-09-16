declare namespace JSX {
    interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
            behavior?: string;
            direction?: string;
            onmouseover?: string;
            onmouseout?: string;
            loop?: boolean;
        }, HTMLElement>;
    }
}