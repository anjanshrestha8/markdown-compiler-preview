import { useState } from "react"
import { renderHeading } from "./parser/rules/heading"
import { renderParagraph } from "./parser/rules/paragrpahs/paragraph"
import { renderLink } from "./parser/rules/link"
import "./App.css"

function App() {
  const [input, setInput] = useState("# Hello World\n\nStart typing your markdown here...")

  const lines = input.split("\n")
  const charCount = input.length
  const wordCount = input.trim().split(/\s+/).filter(Boolean).length
  const lineCount = lines.length

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1a202c',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        borderBottom: '3px solid #2d3748'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.025em' }}>
            Markdown Editor
          </h1>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            fontSize: '0.875rem',
            color: '#a0aec0'
          }}>
            <span>{lineCount} lines</span>
            <span>{wordCount} words</span>
            <span>{charCount} chars</span>
          </div>
        </div>
      </header>

      {/* Split Pane Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        padding: '1rem',
        maxWidth: '1400px',
        margin: '0 auto',
        height: 'calc(100vh - 80px)'
      }}>
        {/* Editor Panel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '0.625rem 1rem',
            backgroundColor: '#f7fafc',
            color: '#2d3748',
            fontSize: '0.8125rem',
            fontWeight: 600,
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span>✏️ Editor</span>
            <button
              onClick={() => setInput("")}
              style={{
                background: 'none',
                border: 'none',
                color: '#e53e3e',
                cursor: 'pointer',
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
                borderRadius: '3px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fed7d7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Clear
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="# Start writing markdown..."
            spellCheck={false}
            style={{
              flex: 1,
              width: '100%',
              padding: '1.5rem',
              border: 'none',
              outline: 'none',
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", "Source Code Pro", monospace',
              resize: 'none',
              backgroundColor: 'white',
              color: '#2d3748',
              caretColor: '#3182ce'
            }}
          />
        </div>

        {/* Preview Panel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '0.625rem 1rem',
            backgroundColor: '#f7fafc',
            color: '#2d3748',
            fontSize: '0.8125rem',
            fontWeight: 600,
            borderBottom: '1px solid #e2e8f0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Preview
          </div>
          <div 
            className="markdown-preview"
            style={{
              flex: 1,
              padding: '1.5rem 2rem',
              overflowY: 'auto',
              lineHeight: '1.75',
              color: '#1a202c'
            }}
          >
            {lines.map((line, i) => {
              const heading = renderHeading(line, i);
              if (heading) return heading;
              const link = renderLink(line, i);
              if (link) return link;
              return renderParagraph(line, i);
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App