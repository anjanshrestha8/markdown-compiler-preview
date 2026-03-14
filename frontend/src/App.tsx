import { useState } from "react"
import { renderHeading } from "./parser/rules/heading"

function App() {
  const [input, setInput] = useState("# Hello World")

  const lines = input.split("\n")

  console.log(lines)

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
          const result = renderHeading(line);
console.log(result,'result')
          return result ? result : <p key={i}>{line}</p>;
        })}
      </div>
    </div>
  )
}

export default App
