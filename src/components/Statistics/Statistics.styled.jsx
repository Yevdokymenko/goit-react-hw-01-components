import styled from '@emotion/styled';

export const StatisticWrapp = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-color: black;
  border: solid 0.1em;
  box-shadow: 1px 1px grey;
  border-radius: 5px;
`;

export const StatisticTitle = styled.h2`
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0;
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  height: 50px;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const StatisticItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
  text-align: center;
  background-color: #3b5998;
`;

export const StatisticLabel = styled.span`
  font-size: 15px;
  color: white;
`;

export const StatisticPercentage = styled.span`
  font-size: 25px;
`;
