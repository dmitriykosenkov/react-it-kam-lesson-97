import React from "react";
import Profile from "./Profile";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  updateFullNameThunkCreator,
  savePhoto,
  saveProfile
} from "../../redux/profile-reducer";
import withAuthRedirectComponent from "../../hoc/authRedirect";

class ProfilePage extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
        updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    savePhoto,
    saveProfile
  }),
  withRouter
  // withAuthRedirectComponent
)(ProfilePage);
