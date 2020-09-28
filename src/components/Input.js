import styled from "styled-components";
import React, { useState } from "react";

const StyledInput = styled.input`
  display: block;
  width: 80%;
  height: 3rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 35px 5px rgba(0, 0, 0, 0.12);
  }
`;

export default function Input(props) {
  const [element, setelement] = useState("");

  function handleChange(e) {
    setelement(e.target.value);
  }

  function handleSubmit(e) {
    if (element !== "") {
      props.handleSubmit(element);
      setelement("");
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Add something to the list"
        onChange={handleChange}
        value={element}
      />
    </form>
  );
}
