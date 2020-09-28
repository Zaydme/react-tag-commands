import React from "react";
import styled from "styled-components";
import ListElement from "./ListElement";

const SytledList = styled.ul`
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  font-size: 1.5rem;
`;

export default function List({ list }) {
  return (
    <SytledList>
      {list.map((item) => (
        <ListElement text={item}/>
      ))}
    </SytledList>
  );
}
