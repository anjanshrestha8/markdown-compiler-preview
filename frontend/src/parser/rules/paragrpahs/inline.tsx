import type { ReactElement } from "react"
import { REGEX_FOR } from "../../regex";


export interface ParagraphParams  {
  line: string
}

export const parseParagraph = ({ line }: ParagraphParams):(string | ReactElement) [] => {
  const result: (string | ReactElement)[] = [];
  let remainingLine = line;
  let key = 0;

  console.log(remainingLine.length)

  while (remainingLine.length> 0){
    const match = remainingLine.match(REGEX_FOR.PARAGRAPH);

    if(!match || match?.index === undefined){
      result.push(remainingLine);
      break;
    }

    if(match?.index > 0){
      result.push(remainingLine.slice(0, match.index))
    }

    if(match[0].startsWith("**")){
      result.push(<strong key={key++}>{match[2]}</strong>);
    }else{
      result.push(<em key={key++}>{match[3]}</em>);
    }

    remainingLine = remainingLine.slice(match.index + match[0].length)
  }
  return result;
}