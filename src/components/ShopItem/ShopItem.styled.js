import styled from "styled-components";

export const Wrapper = styled.button`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &: hover {
    color: white;
    background-color: blue;
  }
`;
