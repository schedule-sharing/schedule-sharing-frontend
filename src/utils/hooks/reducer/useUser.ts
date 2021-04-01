import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { asyncLogin, asyncLogout } from "../../../store/reducers/userReducer/userReducer";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);

  const login = useCallback((val: LoginFormValue) => dispatch(asyncLogin(val)), [dispatch]);

  const logout = useCallback(() => dispatch(asyncLogout()), [dispatch]);
  return { user, login, logout };
};
