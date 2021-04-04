import { Dispatch } from "redux";
import axios from "axios";
import { RootState } from "../rootReducer";
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

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout> | ReturnType<typeof loading>;

export const asyncLogin = (value: LoginFormValue) => async (dispatch: Dispatch<ReturnType<typeof login> | ReturnType<typeof loading>>) => {
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
      await window.localStorage.setItem("access_token", res.data.access_token);
      dispatch(login(user));
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    dispatch(loading());
  }
};
export const asyncLogout = () => async (dispatch: Dispatch<ReturnType<typeof loading> | ReturnType<typeof logout>>) => {
  dispatch(loading());
  try {
    await window.localStorage.removeItem("access_token");
    dispatch(logout());
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(loading());
  }
};

export const asyncRemove = () => async (dispatch: Dispatch<ReturnType<typeof logout> | ReturnType<typeof loading>>, getState: () => RootState) => {
  console.log(getState());
  const { id } = getState().userReducer.user;
  // eslint-disable-next-line no-restricted-globals
  if (confirm("정말 탈퇴하시겠습니까?")) {
    dispatch(loading());
    try {
      const data = axios.delete(`/member/${id}`).then((res) => res.data);
      data
        .then((res) => {
          if (res.success) alert(res.message);
        })
        .then(() => dispatch(logout()));
    } catch (err) {
      console.error(err.message);
    } finally {
      dispatch(loading());
    }
  }
};

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
        ...state,
        authenticated: true,
        user: action.payload.user
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: initialState.user
      };

    default:
      return state;
  }
};
