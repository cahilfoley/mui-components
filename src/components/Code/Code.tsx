import * as React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from './theme'
import './styles.css'

export interface CodeProps {
  children: string
  language?: Language
}

const Code: React.FC<CodeProps> = ({ children, language = 'jsx' }) => (
  <Highlight {...defaultProps} theme={theme} code={children} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default Code
