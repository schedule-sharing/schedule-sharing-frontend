import { Dispatch } from "redux";
import axios from "axios";
// actions
const LOGIN = "user/login" as const;
const LOGOUT = "user/logout" as const;
const LOADING = "user/loading" as const;

// action creators
const login = (val: user) => ({
  type: LOGIN,
  payload: {
    user: val
  }
});
const logout = () => ({
  type: LOGOUT
});
const loading = () => ({
  type: LOADING
});
export const asyncLogin = (value: LoginFormValue) => async (
  dispatch: Dispatch<ReturnType<typeof login> | ReturnType<typeof loading>>
) => {
  dispatch(loading());
  try {
    const res = await axios.post("/authenticate", value);
    const user = {
      email: res.data.email,
      id: res.data.id.toString(),
      imagePath: res.data.imagePath,
      name: res.data.name
    };
    if (res.data.access_token) {
      // 일단은 로컬스토리이제 토큰 저장
      window.localStorage.setItem("access_token", res.data.access_token);
      dispatch(login(user));
      return true;
    }
    dispatch(loading());
    return false;
  } catch (err) {
    //
    return false;
  }
};
type UserAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>
  | ReturnType<typeof loading>;

type UserState = {
  loading: boolean;
  authenticated: boolean;
  user: user;
};
const initialState: UserState = {
  loading: false,
  authenticated: false,
  user: {
    email: "",
    id: "",
    imagePath: "",
    name: ""
  }
};
export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: !state.loading,
        authenticated: state.authenticated,
        user: state.user
      };
    case LOGIN:
      return {
        loading: state.loading,
        authenticated: true,
        user: action.payload.user
      };
    case LOGOUT:
      return {
        loading: state.loading,
        authenticated: false,
        user: initialState.user
      };
    default:
      return state;
  }
};
