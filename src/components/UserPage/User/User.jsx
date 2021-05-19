import React from "react";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import userPhoto from "../../../assets/images/user-photo.webp";

// Деструктуризация пропсов
const User = ({
  user,
  followingInProgress,
  followThunkCreator,
  unfollowThunkCreator,
}) => {
  return (
    <div>
      <div className={s.user}>
        <div className={s.photoUrl}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {!user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={s.followBtn}
              onClick={() => {
                followThunkCreator(user.id);
              }}
            >
              Follow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={s.followBtn}
              onClick={() => {
                unfollowThunkCreator(user.id);
              }}
            >
              Unfollow
            </button>
          )}
        </div>

        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.status}</div>

        <div>user.location.city</div>
        <div>user.location.country</div>
      </div>
    </div>
  );
};
export default User;
