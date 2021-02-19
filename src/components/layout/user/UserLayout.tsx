import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import LoginForm from "./form/LoginForm";
import SignUpForm from "./form/SignUpForm";
import Styles from "./userLayoutStyle";

const UserLayout = () => {
  const classes = Styles();
  return (
    <>
      <Grid container justify="center">
        {/* header */}
        <Grid xs={12} item container justify="space-around">
          <Grid item xs={2}>
            {/* 앱로고 이름 들어가야함 */}
            <Typography color="secondary" children="앱로고&이름" />
          </Grid>
          <Grid item xs={8}>
            <Typography
              style={{ marginTop: "100px" }}
              color="secondary"
              align="center"
              variant="h3"
              children="앱이름"
            />
          </Grid>
          <Grid container justify="flex-end" item xs={2}>
            <Grid item xs={false}>
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                size="small"
                children="회원가입"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* body */}
        <Grid xs={10} md={8} lg={6} xl={4} item justify="center" container>
          <Grid item xs={12} sm={8} lg={7}>
            {/* 라우트에 따라 */}
            {/* <LoginForm /> */}
            <SignUpForm />
          </Grid>
        </Grid>
      </Grid>
      <Link href="/">홈으로가기</Link>
    </>
  );
};
export default UserLayout;
