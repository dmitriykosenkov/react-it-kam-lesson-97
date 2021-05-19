import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileName = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [fullName, setName] = useState(props.fullName);
  useEffect(() => {
    setName(props.fullName);
  }, [props.fullName]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateFullNameThunkCreator(fullName);
  };
  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{props.fullName}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onNameChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileName;
