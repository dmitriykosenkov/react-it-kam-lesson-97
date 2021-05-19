import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatusThunkCreator(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div className={s.status}>
          <span onClick={activateEditMode}>{props.status || "______"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={s.input}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHook;
