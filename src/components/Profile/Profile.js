import React from 'react';
import stl from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ user }) => (
  <div className={stl.profileCardMain}>
    <div className={stl.profileCard}>
      <img src={user.avatar} alt="user avatar" className={stl.paragraph__img} />
      <p className={stl.profile__name}>{user.name}</p>
      <p className={stl.paragraph}>{user.tag}</p>
      <p className={stl.paragraph}>{user.location}</p>
    </div>

    <ul className={stl.paragraph__list}>
      <li className={stl.paragraph__item}>
        <span className={stl.paragraph}>Followers</span>
        <span className={stl.paragraph}>{user.stats.followers}</span>
      </li>
      <li className={stl.paragraph__item}>
        <span className={stl.paragraph}>Views</span>
        <span className={stl.paragraph}>{user.stats.views}</span>
      </li>
      <li className={stl.paragraph__item}>
        <span className={stl.paragraph}>Likes</span>
        <span className={stl.paragraph}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  user: PropTypes.shape({
    name: '',
    tag: '',
    location: '',
    avatar: '',
    stats: PropTypes.shape({
      followers: 0,
      views: 0,
      likes: 0,
    }),
  }),
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;
