import { useState } from "react"
import { renderHeading } from "./parser/rules/heading"
import { renderParagraph } from "./parser/rules/paragrpahs/paragraph"

function App() {
  const [input, setInput] = useState("# Hello World")
console.log(input)
  const lines = input.split("\n");

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        cols={50}
        placeholder="Type markdown here..."
      />
      <div>
        {lines.map((line, i) => {
          return renderHeading(line) ?? renderParagraph(line,i);
        })}
      </div>
    </div>
  )
}

export default App
