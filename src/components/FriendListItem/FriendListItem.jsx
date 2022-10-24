import { PropTypes } from 'prop-types';
import { Avatar, Status, List } from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <List>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </List>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
