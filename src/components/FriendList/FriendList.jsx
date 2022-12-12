import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          width="100"
        />
      ))}
      ´
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
