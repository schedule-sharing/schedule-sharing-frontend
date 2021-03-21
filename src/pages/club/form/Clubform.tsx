import {
  Button,
  Grid,
  makeStyles,
  Modal,
  TextField,
  Theme,
  Typography
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { addClub } from "../../../api/club/club";

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    border: "1px solid black",
    width: "300px",
    backgroundColor: "white",
    padding: theme.spacing(3)
  }
}));

const initialValue: clubAddType = {
  clubName: "",
  categories: ""
};
const Clubform = ({
  visibility,
  setVisibility
}: {
  visibility: boolean;
  setVisibility: () => void;
}) => {
  const handleSubmit = async (val: clubAddType) => {
    addClub(val).then(() => setVisibility());
  };
  const classes = useStyles();
  return (
    <Modal className={classes.modal} onClose={setVisibility} open={visibility}>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form className={classes.form}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography align="center" variant="h5">
                  클럽 추가
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
                  error={
                    Boolean(formikProps.errors.clubName) &&
                    formikProps.touched.clubName
                  }
                  helperText={
                    formikProps.errors.clubName && formikProps.touched.clubName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="카테고리"
                  name="categories"
                  value={formikProps.values.categories}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.categories) &&
                    formikProps.touched.categories
                  }
                  helperText={
                    formikProps.errors.categories &&
                    formikProps.touched.categories
                  }
                />
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
    </Modal>
  );
};

export default Clubform;
