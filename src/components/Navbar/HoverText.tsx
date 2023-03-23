import React from 'react';

interface HoverTextProps {
    text: string;
}

function HoverText({ text }: HoverTextProps): JSX.Element {
    return <div className="fly-text">{text}</div>;
}

export default HoverText;
