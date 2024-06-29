import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(s.mainBox)}>
      <div className={clsx(s.avatarInfo)}>
        <img className={clsx(s.imgProfile)} src={image} alt="User avatar" />
        <p className={clsx(s.nameAvatar)}>{name}</p>
        <p className={clsx(s.avatarDescr)}>@{tag}</p>
        <p className={clsx(s.avatarDescr)}>{location}</p>
      </div>
      <ul className={clsx(s.statsList)}>
        <li className={clsx(s.statsListItem)}>
          <span>Followers</span>
          <span className={clsx(s.statsListItemCount)}>{stats.followers}</span>
        </li>
        <li className={clsx(s.statsListItem)}>
          <span>Views</span>
          <span className={clsx(s.statsListItemCount)}>{stats.views}</span>
        </li>
        <li className={clsx(s.statsListItem)}>
          <span>Likes</span>
          <span className={clsx(s.statsListItemCount)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.PropTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Profile;
