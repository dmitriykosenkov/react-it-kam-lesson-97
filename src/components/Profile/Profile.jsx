import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        isOwner={props.isOwner}
        updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer clearPost={props.clearPost} />
    </div>
  );
};

export default Profile;
