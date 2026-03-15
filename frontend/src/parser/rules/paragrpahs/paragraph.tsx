import type { ReactElement } from "react";
import { parseParagraph } from "./inline";

export const renderParagraph = (line: string, key: number) : ReactElement | null => {

  return <p key={key}>{parseParagraph({line})}</p>
}