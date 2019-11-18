import React from 'react';
import stylesItem from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={stylesItem.FriendListItem__item}>
    <span
      className={
        isOnline
          ? stylesItem.FriendListItem__status
          : stylesItem.FriendListItem__notActive
      }
    >
      {isOnline}
    </span>
    <img
      className={stylesItem.FriendListItem__avatar}
      src={avatar}
      alt=""
      width="48"
    />
    <p className={stylesItem.FriendListItem__name}>{name}</p>
  </li>
);

export default FriendListItem;
