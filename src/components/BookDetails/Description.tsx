import React, { useEffect, useState } from 'react';

export type Props = {
    bookUrl: string;
};

const Description: React.FC<Props> = ({ bookUrl }: Props) => {
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/proxy?url=${encodeURIComponent(bookUrl)}`);
            const html = await response.text();

            console.log("html", html);

            // Extract all the paragraph tags from the HTML content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const paragraphs = Array.from(doc.querySelectorAll('p')).map(p => p.textContent).filter(Boolean);

            console.log("paragraphs", paragraphs);

            // Join the paragraphs into a single string
            const descriptionText = paragraphs.join('\n');

            console.log("descriptionText", descriptionText);

            setDescription(descriptionText);
        };

        fetchData();
    }, [bookUrl]);

    return <div>{description}</div>;
};

export default Description;
