import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeBlock = ({ code, language }) => (
    <SyntaxHighlighter language={language} style={docco} showLineNumbers>
        {code}
    </SyntaxHighlighter>
);

export default CodeBlock