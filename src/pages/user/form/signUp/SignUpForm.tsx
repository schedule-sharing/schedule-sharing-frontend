import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Formik } from "formik";
import React, { useState } from "react";
import useStyles from "./signUpFormStyle";
import { signUp } from "../../../../api/user/user";

const intialFormValue: SignUpFormValue = {
  email: "",
  name: "",
  password: "",
  imagePath: "imagePath",
  confirmPassword: ""
};
const SignUpForm = () => {
  const classes = useStyles();
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  // submit
  const handleSubmit = (v: SignUpFormValue) => {
    const { email, name, password, imagePath } = v;
    signUp({ email, name, password, imagePath });
  };

  return (
    <Formik initialValues={intialFormValue} onSubmit={handleSubmit}>
      {(formikProps) => (
        <form className={classes.root} onSubmit={formikProps.handleSubmit}>
          <Grid container direction="column" spacing={3}>
            {/* 로그인 */}
            <Grid item container xs={12}>
              <TextField
                fullWidth
                size="small"
                classes={{ root: classes.textField }}
                name="name"
                placeholder="이름"
                variant="outlined"
                value={formikProps.values.name}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched.name && Boolean(formikProps.errors.name)
                }
                helperText={formikProps.touched.name && formikProps.errors.name}
              />
              <TextField
                fullWidth
                size="small"
                classes={{ root: classes.textField }}
                name="email"
                placeholder="이메일"
                variant="outlined"
                value={formikProps.values.email}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched.email && Boolean(formikProps.errors.email)
                }
                helperText={
                  formikProps.touched.email && formikProps.errors.email
                }
              />
              <TextField
                fullWidth
                className={classes.textField}
                name="password"
                placeholder="비밀번호"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPw((prev) => !prev)}>
                        {showPw ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                type={showPw ? "text" : "password"}
                variant="outlined"
                size="small"
                value={formikProps.values.password}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched.password &&
                  Boolean(formikProps.errors.password)
                }
                helperText={
                  formikProps.touched.password && formikProps.errors.password
                }
              />
              <TextField
                fullWidth
                size="small"
                className={classes.textField}
                name="confirmPassword"
                placeholder="비밀번호확인"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">

                      <IconButton onClick={() => setShowPw2((prev) => !prev)}>
                        {showPw2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                type={showPw ? "text" : "password"}
                variant="outlined"
                value={formikProps.values.confirmPassword}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched.confirmPassword &&
                  Boolean(formikProps.errors.confirmPassword)
                }
                helperText={
                  formikProps.touched.confirmPassword &&
                  formikProps.errors.confirmPassword
                }
              />
              <Grid item justify="center" container xs={12}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  children="By continuing, you are agreeing to the Terms of Service & Privacy Policy."
                />
              </Grid>
            </Grid>
            {/* desc */}

            <Grid item xs={12}>
              <Button
                type="submit"
                className={classes.loginBtn}
                size="large"
                variant="contained"
                fullWidth
                children="회원가입"
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
