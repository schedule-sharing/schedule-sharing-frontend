import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../hooks/reducer/useUser";

const Auth = (Compo: any) => {
  const AuthCheck = () => {
    const { user } = useUser();
    const isAuth = user.authenticated;
    const history = useHistory();
    useEffect(() => {
      if (!isAuth) history.push("/user/login");
      if (isAuth && history.location.pathname.startsWith("/user"))
        history.push("/calendar");
    }, [isAuth, history]);
    return <Compo />;
  };

  return AuthCheck;
};

export default Auth;
