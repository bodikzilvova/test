import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: end;
`
export const TotalPrice = styled.p`
`

export const Btn = styled.button`
margin-left: 50px;
height: 30px;
width: 200px;
border: none;
border-radius: 10px;
cursor: pointer;
transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

&:hover {
    background-color: blue;
    color: white;
}
`