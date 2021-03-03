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
import { Link } from "react-router-dom";

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
type intialFormValueType = {
  userId: string;
  userPw: string;
};
const intialFormValue: intialFormValueType = {
  userId: "",
  userPw: ""
};
const LoginForm = () => {
  const classes = useStyles();
  const [showPw, setShowPw] = useState(false);
  // submit
  const handleSubmit = (v: intialFormValueType) => {
    console.log(v);
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
                name="userId"
                placeholder="아이디"
                variant="outlined"
                value={formikProps.values.userId}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched && Boolean(formikProps.errors.userId)
                }
                helperText={formikProps.touched && formikProps.errors.userId}
              />
              <TextField
                fullWidth
                size="small"
                className={classes.textField}
                name="userPw"
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
                value={formikProps.values.userPw}
                onChange={formikProps.handleChange}
                error={
                  formikProps.touched && Boolean(formikProps.errors.userId)
                }
                helperText={formikProps.touched && formikProps.errors.userId}
              />

              {/* 비번 잊음 */}
              <Grid item justify="space-between" container xs={12}>
                <Typography
                  variant="caption"
                  align="center"
                  children="비밀번호를 잊어버렸어요"
                />
                <Link to="/signup">
                  <Typography
                    variant="caption"
                    align="center"
                    children="계정이 없어요"
                  />
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                className={classes.loginBtn}
                size="large"
                variant="contained"
                fullWidth
                children="로그인"
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
