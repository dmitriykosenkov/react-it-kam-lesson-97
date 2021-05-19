import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_AUTH_DATA';


let defaultProfile = {
   userId: null,
   login: null,
   email: null,
   isAuth: false,
}

const authReducer = (state = defaultProfile, action) => {
   switch (action.type) {
      case SET_USER_DATA: {

         return {
            ...state,
            ...action.payload,
         };
      }

      default:
         return state;
   }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } });

export const authMeThunkCreator = () => async (dispatch) => {
   const data = await authAPI.authMe();
   if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
   }
}
export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(authMeThunkCreator());
   } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
   }
}
export const logoutThunkCreator = () => async (dispatch) => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
}

export default authReducer;