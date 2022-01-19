import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { codeText, syntaxHighlighter } from './styles.css'

const Code = ({
  className,
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  if (!className) {
    return <code className={codeText}>{children}</code>
  }

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={syntaxHighlighter}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code
