import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./signUpFormStyle";
import axios from "../../../../config/axios/axios";

const initialFormValue: SignUpFormValue = {
  email: "",
  name: "",
  password: "",
  imagePath: "",
  confirmPassword: ""
};
const SignUpForm = () => {
  const classes = useStyles();
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const [profileImg, setProfileImg] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  // img upload
  const uploadImg = async (e: React.ChangeEvent<HTMLInputElement>, formikProps: FormikProps<SignUpFormValue>) => {
    const input = e.currentTarget;
    const fReader = new FileReader();
    if (input.files) {
      fReader.readAsDataURL(input.files[0]);
      setProfileImg(input.files[0].name);
      fReader.onloadend = (event) => {
        if (event.target) {
          // eslint-disable-next-line no-param-reassign
          formikProps.values.imagePath = event.target.result as string;
        }
      };
    }
  };
  const verifyEmail = (email: string) => {
    const reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (reg.test(email)) {
      axios.post("/member/checkEmail", { email }).then((res) => {
        if (res.data.duplicate) setIsValid(false);
        else setIsValid(true);
        alert(res.data.message);
      });
    } else {
      alert("이메일 형식이 알맞지 않습니다");
      setIsValid(false);
    }
  };
  // submit
  const handleSubmit = (v: SignUpFormValue) => {
    const { email, name, password, imagePath } = v;
    axios.post("/member/signup", { email, name, password, imagePath }).then((res) => {
      // TODO: if response 값이 참이면 로그인페이지로 이동, 거짓이면 거짓메시지출력
      alert("가입이 완료되었습니다.");
      history.push("/user/login");
      return res.data;
    });
  };
  // validate
  const handleValidate = (v: SignUpFormValue) => {
    const errors: Record<string, string> = {};
    if (!v.name) errors.name = "이름을 입력하시오";
    if (!v.email) errors.email = "이메일을 입력하시오";
    else if (!isValid) errors.email = "이메일 중복확인하시오";
    if (!v.password || v.password.length < 5) errors.password = "비밀번호를 5자리 이상이여야합니다.";
    if (v.confirmPassword !== v.password) errors.confirmPassword = "두 비밀번호가 일치하지 않습니다.";
    return errors;
  };
  return (
    <Formik initialValues={initialFormValue} validate={handleValidate} onSubmit={handleSubmit}>
      {(formikProps) => (
        <form className={classes.root} onBlur={formikProps.handleBlur} onSubmit={formikProps.handleSubmit}>
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
                helperText={formikProps.touched.name && formikProps.errors.name}
                error={formikProps.touched.name && Boolean(formikProps.errors.name)}
              />
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  size="small"
                  classes={{ root: classes.textField }}
                  name="email"
                  placeholder="이메일"
                  variant="outlined"
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange}
                  error={formikProps.touched.email && Boolean(formikProps.errors.email)}
                  helperText={formikProps.touched.email && formikProps.errors.email}
                />
              </Grid>
              <Grid item xs={3}>
                <Button id="checkEmail" fullWidth variant="contained" color="primary" onClick={() => verifyEmail(formikProps.values.email)}>
                  중복체크
                </Button>
              </Grid>
              <TextField
                fullWidth
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
                size="small"
                value={formikProps.values.password}
                onChange={formikProps.handleChange}
                error={formikProps.touched.password && Boolean(formikProps.errors.password)}
                helperText={formikProps.touched.password && formikProps.errors.password}
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
                      <IconButton onClick={() => setShowPw2((prev) => !prev)}>{showPw2 ? <Visibility /> : <VisibilityOff />}</IconButton>
                    </InputAdornment>
                  )
                }}
                type={showPw2 ? "text" : "password"}
                variant="outlined"
                value={formikProps.values.confirmPassword}
                onChange={formikProps.handleChange}
                error={formikProps.touched.confirmPassword && Boolean(formikProps.errors.confirmPassword)}
                helperText={formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}
              />
              <Grid item justify="center" container xs={12}>
                <Grid item xs={4}>
                  <Button size="small" color="primary" variant="contained" component="label">
                    Upload a file
                    <input
                      name="imagePath"
                      // value={formikProps.values.imagePath}
                      accept="image/x-png,image/gif,image/jpeg"
                      onChange={(e) => uploadImg(e, formikProps)}
                      type="file"
                      hidden
                    />
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  {profileImg}
                </Grid>
              </Grid>
            </Grid>
            <Grid item justify="center" container xs={12}>
              <Typography variant="subtitle2" align="center" children="By continuing, you are agreeing to the Terms of Service & Privacy Policy." />
            </Grid>
            {/* desc */}
            <Grid item xs={12}>
              <Button
                type="submit"
                id="signUpFormSubmit"
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
