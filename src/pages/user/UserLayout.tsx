import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import SignUpForm from "./form/SignUpForm";
import LoginForm from "./form/LoginForm";

const UserLayout = () => (
  <>
    <Grid container justify="center">
      {/* header */}
      <Grid xs={12} item container justify="space-around">
        <Grid item xs={2}>
          {/* 앱로고 이름 들어가야함 */}
          <Typography color="secondary" children="앱로고&이름" />
        </Grid>
        <Grid item xs={8}>
          <Link to="/">
            <Typography
              style={{ marginTop: "100px" }}
              color="secondary"
              align="center"
              variant="h3"
              children="앱이름"
            />
          </Link>
        </Grid>
        <Grid container justify="flex-end" item xs={2}>
          <Grid item xs={false}>
            <Link to="/user/signup">
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                size="small"
                children="회원가입"
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* body */}
      <Grid xs={10} md={8} lg={6} xl={4} item justify="center" container>
        <Grid item xs={12} sm={8} lg={7}>
          {/* 라우트에 따라 */}
          <Switch>
            <Route path="/user/signup" component={SignUpForm} />
            <Route path="/user/login" component={LoginForm} />
            <Redirect to="/user/login" />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  </>
);
export default UserLayout;
