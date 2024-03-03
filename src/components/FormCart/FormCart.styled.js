import styled from "styled-components";

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  height: 480px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  outline: none;

  &: last-child {
    margin-bottom: 0px;
  }

  &:hover {
    border-color: blue;
  }
`;
