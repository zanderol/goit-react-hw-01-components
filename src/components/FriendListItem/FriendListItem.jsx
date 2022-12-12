// import PropTypes from 'prop-types';
import defaultAvatarImage from 'components/default.png';
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
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

// FriendListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
