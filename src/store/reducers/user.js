import Profile from "store/models/Profile";
import types from "store/types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.USER_CHECK_SESSION:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        profile: new Profile(),
        errorMessage: ""
      };

    case types.USER_CHECK_SESSION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        profile: new Profile(payload)
      };

    case types.USER_CHECK_SESSION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        profile: new Profile(),
        errorMessage: ""
      };

    case types.USER_LOGIN:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        profile: new Profile(),
        errorMessage: ""
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        profile: new Profile(payload)
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        errorMessage: payload.message
      };

    case types.UPDATE_PROFILE:
      return {
        ...state,
        isFetching: true,
        profile: new Profile(payload),
        errorMessage: ""
      };

    default:
      return state;
  }
}

export default reducer;