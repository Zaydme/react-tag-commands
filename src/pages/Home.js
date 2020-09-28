import React, { useState } from "react";
import Input from "../components/Input"
import List from "../components/List";
import styled from "styled-components";

const Intro = styled.p`
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    font-size: 1rem;
`

const initialList = [
    "Hi p/James welcome to l/London",
    "The weather is w/sunny today",
    "I have a meeting in t/09-30-2020",
];

function Home() {

  const [list, setList] = useState(initialList);

  function addElement(newEl) {
    setList([...list, newEl]);
  }

  return (
    <>      
      <Input handleSubmit={addElement} />
      <Intro>List of commands: p/person, l/location, w/weather, t/time (t/mm-dd-yyyy)<br/>
        Try: <b>Hi p/Zayd it will be w/snowy in l/Paris t/12-24-2020</b>
      </Intro>
      <List list={list} />
    </>
  );
}

export default Home;
