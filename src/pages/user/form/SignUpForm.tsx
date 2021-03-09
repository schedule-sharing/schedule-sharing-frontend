import React, { useState } from "react";
import {
  InputAdornment,
  makeStyles,
  Typography,
  TextField,
  Theme,
  Button,
  IconButton,
  Grid
} from "@material-ui/core";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { registerUserApi } from "../../../api/userAPI";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto"
  },
  textField: {
    backgroundColor: "white",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  },
  loginBtn: {
    backgroundColor: "white"
  }
}));
export type initialFormValueType = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  imagePath: string;
};
const intialFormValue: initialFormValueType = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  imagePath: ""
};
const SignUpForm = () => {
  const classes = useStyles();
  const [showPw, setShowPw] = useState(false);
  // submit
  const handleSubmit = (v: initialFormValueType) => {
    const { email, password, name, imagePath } = v;
    registerUserApi({ email, password, name, imagePath });
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
                name="email"
                placeholder="아이디"
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
                      <IconButton onClick={() => setShowPw((prev) => !prev)}>
                        {showPw ? <Visibility /> : <VisibilityOff />}
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
              <TextField
                fullWidth
                className={classes.textField}
                name="name"
                placeholder="이름"
                type="name"
                variant="outlined"
                size="small"
                value={formikProps.values.name}
                onChange={formikProps.handleChange}
              />
              <TextField
                fullWidth
                className={classes.textField}
                name="imagePath"
                placeholder="이미지 경로"
                type="imagePath"
                variant="outlined"
                size="small"
                value={formikProps.values.imagePath}
                onChange={formikProps.handleChange}
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
