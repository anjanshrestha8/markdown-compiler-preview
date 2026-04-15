import type { ReactElement } from "react"
import { REGEX_FOR } from "../regex";

export interface LinkToken {
  type: "link";
  text: string;
  url: string;
  title?: string;
}

export const parseLink = (text: string): LinkToken | null => {
  const match = text.match(REGEX_FOR.LINK);
  if (!match) return null;

  return {
    type: "link",
    text: match[1].trim(),
    url: match[2].trim(),
    title: match[3]?.trim(),
  };
}

export const renderLink = (text: string, key: number): ReactElement | null => {
  const token = parseLink(text);
  if (!token) return null;

  const { text: linkText, url, title } = token;
  return (
    <a 
      key={key} 
      href={url}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  );
}
