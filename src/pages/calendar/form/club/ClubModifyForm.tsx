import { Button, MenuItem, Grid, makeStyles, Modal, TextField, Theme, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import useClub from "../../../../utils/hooks/reducer/useClub";

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(10)
  },
  form: {
    border: "1px solid black",
    width: "300px",
    backgroundColor: "white",
    padding: theme.spacing(3)
  }
}));

const initialValue: clubType = {
  clubName: "",
  categories: ""
};
const ClubModifyForm = ({ visibility, setVisibility }: { visibility: boolean; setVisibility: () => void }) => {
  const { asyncModifyClub, clubs } = useClub();
  const handleSubmit = async (val: clubType) => {
    if (!clubs.currentClub.clubId) {
      alert("선택된 클럽이 없습니다");
    } else {
      asyncModifyClub(clubs.currentClub.clubId, val);
    }
    setVisibility();
  };
  const classes = useStyles();
  return (
    <Modal className={classes.modal} onClose={setVisibility} open={visibility}>
      <div>
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          {(formikProps) => (
            <Form className={classes.form}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography align="center" variant="h5">
                    클럽 수정
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="클럽 이름"
                    name="clubName"
                    value={formikProps.values.clubName}
                    onChange={formikProps.handleChange}
                    error={Boolean(formikProps.errors.clubName) && formikProps.touched.clubName}
                    helperText={formikProps.errors.clubName && formikProps.touched.clubName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    label="카테고리"
                    name="categories"
                    value={formikProps.values.categories}
                    onChange={formikProps.handleChange}
                    error={formikProps.touched.categories && Boolean(formikProps.errors.categories)}
                    helperText={formikProps.touched.categories && formikProps.errors.categories}
                    fullWidth>
                    {["가족", "밥", "동네 친구", "여자 친구", "스터디"].map((v) => (
                      <MenuItem key={v} value={v} children={v} />
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} container justify="space-around">
                  <Button size="small" type="submit" color="secondary">
                    확인
                  </Button>
                  <Button onClick={setVisibility} size="small" color="default">
                    취소
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default ClubModifyForm;
