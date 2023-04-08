// import React, { useEffect, useState } from 'react';

// // Define the props for the component
// export type Props = {
//     bookUrl: string;
// };

// // Define the component as a function that takes in the props and returns JSX
// const Description: React.FC<Props> = ({ bookUrl }: Props) => {
//     // Define state to hold the book description
//     const [description, setDescription] = useState<string>('');

//     // Define a useEffect hook to fetch the book description from the given URL
//     useEffect(() => {
//         // Define an async function to fetch the HTML content from the given URL
//         const fetchData = async () => {
//             // Use the fetch API to make a request to the `/api/proxy` endpoint, passing in the URL as a query parameter
//             const response = await fetch(`/api/proxy?url=${encodeURIComponent(bookUrl)}`);
//             // Extract the HTML content from the response as a string
//             const html = await response.text();

//             // Log the HTML content to the console
//             console.log('html', html);

//             // Parse the HTML content using the DOMParser API
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');

//             // Extract all the paragraph tags from the parsed HTML content, and filter out any that don't have text content
//             const paragraphs = Array.from(doc.querySelectorAll('p'))
//                 .map((p) => p.textContent)
//                 .filter(Boolean);

//             // Log the extracted paragraphs to the console
//             console.log('paragraphs', paragraphs);

//             // Join the extracted paragraphs into a single string, separated by newlines
//             const descriptionText = paragraphs.join('\n');

//             // Log the final description text to the console
//             console.log('descriptionText', descriptionText);

//             // Set the book description state to the final description text
//             setDescription(descriptionText);
//         };

//         // Call the `fetchData` function when the component mounts, and whenever the `bookUrl` prop changes
//         fetchData();
//     }, [bookUrl]);
//     console.log('Fetching data from URL:', bookUrl);


//     // Render the book description as a div element
//     return <div>{description}</div>;
// };

// // Export the `Description` component as the default export
// export default Description;
///////////////////////////////
import React, { useEffect, useState } from 'react';

export type Props = {
    bookUrl: string;
};

const Description: React.FC<Props> = ({ bookUrl }: Props) => {
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(bookUrl);
                const html = await response.text();

                // Parse the HTML content using the DOMParser API
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Extract all the paragraph tags from the parsed HTML content, and filter out any that don't have text content
                const paragraphs = Array.from(doc.querySelectorAll('p'))
                    .map((p) => p.textContent)
                    .filter(Boolean);

                // Join the extracted paragraphs into a single string, separated by newlines
                const descriptionText = paragraphs.join('\n');

                // Set the book description state to the final description text
                setDescription(descriptionText);
            } catch (error) {
                console.error(`Failed to fetch book description from URL: ${bookUrl}`, error);
            }
        };

        fetchDescription();
    }, [bookUrl]);

    return <div>{description}</div>;
};

export default Description;
