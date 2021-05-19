import { authMeThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let defaultState = {
   initialized: false
}

const appReducer = (state = defaultState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         }
      default:
         return state;
   }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(authMeThunkCreator());
   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   }
   )
}

export default appReducer;