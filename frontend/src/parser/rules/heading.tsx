import type { ReactElement } from "react"

export interface HeadingToken {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

const HEADING_PATTERN = /^(#{1,6})\s+(.+)$/;

export function parseHeading(line: string): HeadingToken | null {
  const match = line.match(HEADING_PATTERN);
  if (!match) return null;

  return {
    type: "heading",
    level: match[1].length as HeadingToken["level"],
    text: match[2].trim(),
  };
}

export function renderHeading(line: string): ReactElement | null {
  const token = parseHeading(line);
  if (!token) return null;

  const { level, text } = token;
  if (level === 1) return <h1>{text}</h1>;
  if (level === 2) return <h2>{text}</h2>;
  if (level === 3) return <h3>{text}</h3>;
  if (level === 4) return <h4>{text}</h4>;
  if (level === 5) return <h5>{text}</h5>;
  return <h6>{text}</h6>;
}
