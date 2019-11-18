import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList__list}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        isOnline={el.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired,
  ),
};

export default FriendList;
