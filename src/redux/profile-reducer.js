import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let defaultProfile = {
   posts: [
      { id: 1, post: "Hi! How are you?", likeCount: 10 },
      { id: 2, post: "I'm fine! Thanks! And you?", likeCount: 11 },
      { id: 3, post: "I study React", likeCount: 12 }
   ],
   profile: null,
   status: ""
}

const profilePageReducer = (state = defaultProfile, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            post: action.newPost,
            likeCount: 0
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      };
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };

      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         };
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         };
      default:
         return state;
   }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, id: postId });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfileThunkCreator = (userId) => {
   return async (dispatch) => {
      const data = await profileAPI.getUserProfile(userId);
      dispatch(setUserProfileAC(data));
   }
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
   let response = await profileAPI.getUserStatus(userId)
   dispatch(setUserStatusAC(response.data));
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
   let response = await profileAPI.updateUserStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setUserStatusAC(status));
   }
}

export const savePhoto = (file) => async dispatch => {
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId;
   const response = await profileAPI.saveProfile(profile);
   debugger
   if (response.data.resultCode === 0) {
      dispatch(getProfileThunkCreator(userId));
   } else {
      dispatch(stopSubmit("ProfileForm", { _error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0])
   }
}

export default profilePageReducer;