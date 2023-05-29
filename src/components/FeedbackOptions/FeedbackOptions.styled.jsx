import styled from 'styled-components';


export const Option = styled.div`
  display: flex;
  gap: 20px;

`;

export const Button = styled.button`
  padding: 12px 10px;
  width: 162px;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  letter-spacing: 1.2px;
  font-size: 25px;
  font-family: Helvetica Neue;
  color: rgb(35, 75, 83);
  background-color:  #d9bc9a;
  background-image: linear-gradient(
    180deg,
     30%,
    transparent 70%
  );
  background-repeat: no-repeat;
  background-size: 100% 200%;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  transition: all 0.5s ease;
`;