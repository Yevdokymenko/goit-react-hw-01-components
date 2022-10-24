import { PropTypes } from 'prop-types';
import {
  ProfileContainer,
  WrapDescription,
  Img,
  UserInfo,
  List,
  ListItem,
  Quatity,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <WrapDescription>
        <Img src={avatar} alt="User avatar" className="avatar" />

        <UserInfo>{username}</UserInfo>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </WrapDescription>

      <List>
        <ListItem>
          <span>Followers</span>
          <Quatity>{followers}</Quatity>
        </ListItem>

        <ListItem>
          <span>Views</span>
          <Quatity>{views}</Quatity>
        </ListItem>

        <ListItem>
          <span>Likes</span>
          <Quatity>{likes}</Quatity>
        </ListItem>
      </List>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
