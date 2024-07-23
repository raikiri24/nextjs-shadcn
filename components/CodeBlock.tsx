// components/CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  language: string;
  value: string;
};

const CodeBlock = ({ language, value }: Props) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
