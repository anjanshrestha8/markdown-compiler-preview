# Markdown Compiler Preview

A browser-based Markdown compiler and live preview tool built with **React**, **TypeScript**, and **Vite**. It features a custom Markdown parser built from scratch — no external parsing libraries used.

## Features

- Live Markdown preview as you type
- Custom Markdown parser using regex rules
- Supports headings (`h1`–`h6`), paragraphs, **bold**, and _italic_ inline formatting
- Line-by-line parsing engine

## Supported Syntax

| Markdown | Output |
|---|---|
| `# Heading 1` | `<h1>` |
| `## Heading 2` | `<h2>` |
| `### Heading 3` | `<h3>` |
| `**bold**` | `<strong>` |
| `*italic*` | `<em>` |
| Any plain text | `<p>` |

## How It Works

The app splits the markdown input by newlines and processes each line through a rule chain:

1. **Heading rule** — matches lines starting with `#` (up to `######`) and returns the corresponding `<h1>`–`<h6>` element
2. **Paragraph rule** — fallback for any non-heading line, wraps content in a `<p>` tag
3. **Inline parser** — runs inside paragraphs, scanning for `**bold**` and `*italic*` patterns and returning a mixed array of strings and React elements

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx               # Root component — textarea input + live preview renderer
│   ├── main.tsx              # Entry point
│   └── parser/
│       ├── regex/            # Shared regex patterns (REGEX_FOR.HEADING, REGEX_FOR.PARAGRAPH)
│       └── rules/
│           ├── heading.tsx        # Parses and renders h1–h6
│           └── paragrpahs/
│               ├── inline.tsx     # Parses inline bold and italic formatting
│               └── paragraph.tsx  # Wraps inline-parsed content in a <p> tag
└── public/
```

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
cd frontend
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
