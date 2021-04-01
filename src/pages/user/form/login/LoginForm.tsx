import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../../../utils/hooks/reducer/useUser";
import useStyles from "./loginFormStyle";

const intialFormValue: LoginFormValue = {
  email: "",
  password: ""
};
const LoginForm = () => {
  const classes = useStyles();

  const { login } = useUser();
  const [showPw, setShowPw] = useState(false);
  // submit
  const handleSubmit = async (v: LoginFormValue) => {
    await login(v);
  };
  // validate
  const handleValidate = (v: LoginFormValue) => {
    const errors: Record<string, string> = {};
    if (!v.email) errors.email = "이메일을 입력하시오";
    if (!v.password) errors.password = "비밀번호를 입력하시오";
    return errors;
  };
  return (
    <Formik initialValues={intialFormValue} validate={handleValidate} onSubmit={handleSubmit}>
      {(formikProps) => (
        <form className={classes.root} onBlur={formikProps.handleBlur} onSubmit={formikProps.handleSubmit}>
          <Grid container direction="column" spacing={3}>
            {/* 로그인 */}
            <Grid item container xs={12}>
              <TextField
                fullWidth
                size="small"
                classes={{ root: classes.textField }}
                name="email"
                placeholder="아이디"
                variant="outlined"
                value={formikProps.values.email}
                onChange={formikProps.handleChange}
                error={formikProps.touched.email && Boolean(formikProps.errors.email)}
                helperText={formikProps.touched.email && formikProps.errors.email}
              />
              <TextField
                fullWidth
                size="small"
                className={classes.textField}
                name="password"
                placeholder="비밀번호"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPw((prev) => !prev)}>{showPw ? <Visibility /> : <VisibilityOff />}</IconButton>
                    </InputAdornment>
                  )
                }}
                type={showPw ? "text" : "password"}
                variant="outlined"
                value={formikProps.values.password}
                onChange={formikProps.handleChange}
                error={formikProps.touched.password && Boolean(formikProps.errors.password)}
                helperText={formikProps.touched.password && formikProps.errors.password}
              />

              {/* 비번 잊음 */}
              <Grid item justify="space-between" container xs={12}>
                <Typography variant="caption" align="center" children="비밀번호를 잊어버렸어요" />
                <Link to="/user/signup">
                  <Typography variant="caption" align="center" children="계정이 없어요" />
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" className={classes.loginBtn} size="large" variant="contained" fullWidth children="로그인" />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
