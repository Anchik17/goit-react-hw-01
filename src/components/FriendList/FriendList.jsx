import clsx from "clsx";
import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.friendList)}>
      {friends.map((friend) => {
        return (
          <li className={clsx(s.friendListItem)} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
