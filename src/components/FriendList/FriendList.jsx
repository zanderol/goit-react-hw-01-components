import PropTypes from 'prop-types';
import defaultAvatarImage from 'components/default.png';
import css from './FriendList.module.css';

// import { SingleFriend } from './SingleFriend';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <SingleFriend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          width="100"
        />
      ))}
    </ul>
  );
}

function SingleFriend({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
      {/* <span className={css.status}>{isOnline}</span> */}
      <span className={isOnline ? css.online : css.offline}></span>

      <img
        className={css.avatar}
        src={avatar ?? defaultAvatarImage}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

SingleFriend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
