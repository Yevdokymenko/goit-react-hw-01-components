import styled from '@emotion/styled';

export const Table = styled.table`
  width: 700px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-color: black;
  border: solid 0.1em;
  box-shadow: 1px 1px grey;
  border-radius: 5px;
`;

export const TableHead = styled.thead`
  border: 1px solid orange;
`;

export const TableHeadElement = styled.tr`
  border: 1px solid orange;
`;

export const TableHeadColumn = styled.th`
  height: 40px;
  background-color: #3b5998;
  font-size: 22px;
  color: white;
`;

export const TableBody = styled.tbody`
  border: 1px solid orange;
`;

export const TableInfo = styled.td`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  background-color: #b6defc;
  border: 1px solid #47a3ea;
`;
