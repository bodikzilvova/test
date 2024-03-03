import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  position: relative;
  margin-bottom: 10px;
`;
export const Img = styled.img`
  height: 120px;
  width: 300px;
  border-radius: 5px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Btn = styled.button`
  width: 20px;
  height: 20px;
  right: 0;
  top: 0;
  position: absolute;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
`;
