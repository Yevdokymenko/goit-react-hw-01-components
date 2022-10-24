import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 320px;
  background-color: white;
  font-size: 25px;
  border-radius: 5px;
  overflow: hidden;
  border-color: black;
  border: solid 0.1em;
  box-shadow: 1px 1px grey;
`;

export const WrapDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserInfo = styled.p`
  margin: 0;
  margin-bottom: 15px;
  &:nth-of-type(1) {
    color: black;
    font-size: 24px;
    font-weight: 500;
  }
  &:last-child {
    margin: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  background-color: #3b5998;
`;

export const ListItem = styled.li`
  color: white;
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  &:nth-of-type(2) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
`;

export const Quatity = styled.span`
  margin: 0;
  color: black;
  font-weight: 500;
`;
