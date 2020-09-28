import React from "react";
import styled from "styled-components";
import { PersonTag, LocationTag, TimeTag, WeatherTag } from "./Tags";

const commands = {
  p: PersonTag,
  l: LocationTag,
  t: TimeTag,
  w: WeatherTag,
};

const Element = styled.li`
  margin: 15px 0;
`;
const Original = styled.small`
  display: block;
  font-size: 15px;
  margin-top: 5px;
  opacity: 0.7;
`;
export default function List({ text }) {
  const allCommands = Object.keys(commands).join(); // this will give us "pwlt"

  // STEP 1: get a list of words that we need to replace
  let toReplace = text.match(new RegExp(`[${allCommands}]\\/.\\S*`, "g"));
  // exp: for "Hi p/James welcome to l/London"
  // it will be:  ["p/James", "l/London"]

  var parts = text.split(/(\s+)/); // spliting the enitre text with white space (but keeping the space)

  // if the part matches one of the toReplace, we replace it with a tag
  for (let i = 0; i < parts.length; i++) {
    if (toReplace.includes(parts[i])) {
      let Tag = commands[parts[i][0]]; // we get the correct tag by looking at first letter (p,w,l,t)
      let cleanText = parts[i].replace(new RegExp(`[${allCommands}]\\/`), ""); // exp: removing the "p/" and only keeping "James"
      parts[i] = <Tag text={cleanText} />;
    }
  }

  return (
    <Element>
      {parts}
      <Original>Original: {text}</Original>
    </Element>
  );
}
