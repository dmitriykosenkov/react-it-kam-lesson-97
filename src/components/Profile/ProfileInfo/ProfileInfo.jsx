import React from "react";
import Preloader from "../../commons/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "../../../assets/images/user-photo.webp";
import ProfileName from "./ProfileName";
import ReduxProfileDataForm from "./ProfileForm";

const ProfileInfo = (props) => {
  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  let [editMode, setEditMode] = React.useState(false);
  const activateEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (values) => {
    props.saveProfile(values).then(() => {
       setEditMode(false);
    })
  };

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <div className={s.userPhoto}>
          <img src={props.profile.photos.large || userPhoto} alt="" />
        </div>
        <div>
          {props.isOwner && <input type="file" onChange={onPhotoChange} />}
        </div>
        <ProfileStatusWithHook
          isOwner={props.isOwner}
          status={props.status}
          updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
        />
        {!editMode ? (
          <ProfileData
            isOwner={props.isOwner}
            profile={props.profile}
            activateEditMode={activateEditMode}
          />
        ) : (
          <ReduxProfileDataForm
            onSubmit={onSubmit}
            initialValues={props.profile}
            profile={props.profile}
          />
        )}
      </div>
    </div>
  );
};
const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <button onClick={props.activateEditMode}>Edit profile</button>
      )}
      <h3>{props.profile.fullName}</h3>
      <div>
        <b>Looking for a job: </b>
        {props.profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>Skills: </b>
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>{props.profile.userId}</div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div className={s.contact}>
              {key}: {props.profile.contacts[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
