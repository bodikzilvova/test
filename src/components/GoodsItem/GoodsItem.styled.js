import styled from "styled-components";

export const Wrapper = styled.li`
border: 1px solid black;
border-radius: 5px;
padding: 10px;
height: 200px;
width: 350px;

`

export const Img = styled.img`
height: 130px;
width: 300px;
margin: auto;
margin-bottom: 10px;
display: block;
`

export const NameWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const ProductName = styled.h3`
margin: 0;
margin-bottom: 10px;
`

export const ProductPrice = styled.p`
margin: 0;
`

export const Button = styled.button`
width: 100px;
height: 25px;
border: none;
border-radius: 10px;
cursor: pointer;
transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

&:hover{
    background-color: blue;
    color: white;
}
`