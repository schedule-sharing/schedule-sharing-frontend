import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/form/LoginForm";
import Styles from "../../styles/user/loginStyle";

const login = () => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item container justify="space-around" alignItems="center">
          {/* header */}
          <Grid item xs={2}>
            {/* 앱로고 이름 들어가야함 */}
            <Typography color="secondary" children="앱로고&이름" />
          </Grid>
          <Grid item xs={8}>
            <Typography
              color="secondary"
              align="center"
              variant="h3"
              children="앱이름"
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              size="large"
              children="회원가입"
            />
          </Grid>
        </Grid>
        {/* body */}
        <Grid item justify="center" container>
          <Grid item xs={6}>
            {/* 라우트에 따라 */}
            <LoginForm />
            {/* <SignInForm /> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default login;
