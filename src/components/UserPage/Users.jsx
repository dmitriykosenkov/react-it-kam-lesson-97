import React from "react";
import Pagination from "../commons/Pagination/Pagination";
import User from "./User/User";
import s from "./UserPage.module.css";

const Users = (props) => {
  return (
    <div>
      <Pagination
        pageSize={props.pageSize}
        totalItemsCount={props.totalUsersCount}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
      <div className={s.users}>
        <div className={s.usersInner}>
          {props.users.map((u) => {
            return (
              <User
                user={u}
                followingInProgress={props.followingInProgress}
                followThunkCreator={props.followThunkCreator}
                unfollowThunkCreator={props.unfollowThunkCreator}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
