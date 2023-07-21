import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  border: 1px solid #9d9d9f;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px solid rgba(17, 17, 17, 0.5);
  margin-bottom: 30px;
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
   color: #000;
`;

export const Location = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #a6a6a6;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #f4f4fd;
    border-radius: 15px;
  justify-content: space-around;
  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 1px 6px rgba(72, 72, 72, 0.08);
  width: 140px;
  padding-top: 40px;
  padding-bottom: 40px;
  
`;

export const Label = styled.span`
  margin-bottom: 10px;
   font-weight: 700;

`;

export const Quantity = styled.span`
  font-weight: 600;
    color: #a6a6a6;
`;
