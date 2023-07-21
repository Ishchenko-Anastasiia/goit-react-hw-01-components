import { styled } from 'styled-components';

export const Item = styled.li`
  width: 400px;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 1px 6px #adaaaa;
  border-radius: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 30px;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
