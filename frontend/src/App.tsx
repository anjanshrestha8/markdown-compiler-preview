import { useState } from "react"
import { renderHeading } from "./parser/rules/heading"
import { renderParagraph } from "./parser/rules/paragrpahs/paragraph"

function App() {
  const [input, setInput] = useState("# Hello World\n\nStart typing your markdown here...")

  const lines = input.split("\n")

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
          Markdown Live Preview
        </h1>
      </header>

      {/* Split Pane Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        padding: '1.5rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Editor Panel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#34495e',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 500,
            borderBottom: '1px solid #2c3e50'
          }}>
            Editor
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type markdown here..."
            style={{
              width: '100%',
              height: 'calc(100vh - 220px)',
              padding: '1.25rem',
              border: 'none',
              outline: 'none',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              fontFamily: '"Monaco", "Menlo", "Courier New", monospace',
              resize: 'none',
              backgroundColor: '#fafafa'
            }}
          />
        </div>

        {/* Preview Panel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#16a085',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 500,
            borderBottom: '1px solid #149174'
          }}>
            Preview
          </div>
          <div style={{
            padding: '1.25rem',
            height: 'calc(100vh - 220px)',
            overflowY: 'auto',
            lineHeight: '1.7',
            color: '#333'
          }}>
            {lines.map((line, i) => {
              return renderHeading(line) ?? renderParagraph(line,i);
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
