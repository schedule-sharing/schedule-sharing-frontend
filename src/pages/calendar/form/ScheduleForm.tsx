import React from "react";
import { Formik, Form } from "formik";
import {
  Grid,
  makeStyles,
  Typography,
  Popover,
  TextField,
  Theme,
  Button
} from "@material-ui/core";

const initialValues: schudleAddType = {
  title: "",
  date: "",
  place: "",
  expireDate: "",
  leastPeople: ""
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "200px",
    height: "400px",
    padding: theme.spacing(1),
    overflow: "hidden"
  }
}));
const ScheduleForm = ({
  visibility,
  anchorEl,
  setVisibility
}: {
  visibility: boolean;
  anchorEl: HTMLElement | null;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleValidate = (values: schudleAddType) => {
    const errors: Record<string, string> = {};
    if (!values.title) {
      errors.title = "title 없음";
    }
  };
  const handleSubmit = (values: schudleAddType) => {
    console.log(values);

    setVisibility(false);
  };

  const classes = useStyles();
  return (
    <Popover
      onBackdropClick={() => setVisibility(false)}
      anchorEl={anchorEl}
      open={visibility}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}>
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form>
            <Grid className={classes.root} container>
              <Grid item xs={12}>
                <Typography align="center" variant="h5" children="일정 추가" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="일정 이름"
                  name="title"
                  value={formikProps.values.title}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.title) &&
                    formikProps.touched.title
                  }
                  helperText={
                    formikProps.errors.title && formikProps.touched.title
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="날짜"
                  name="date"
                  value={formikProps.values.date}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.date) && formikProps.touched.date
                  }
                  helperText={
                    formikProps.errors.date && formikProps.touched.date
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="장소"
                  name="place"
                  value={formikProps.values.place}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.place) &&
                    formikProps.touched.place
                  }
                  helperText={
                    formikProps.errors.place && formikProps.touched.place
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="만료날짜"
                  name="expireDate"
                  value={formikProps.values.expireDate}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.expireDate) &&
                    formikProps.touched.expireDate
                  }
                  helperText={
                    formikProps.errors.expireDate &&
                    formikProps.touched.expireDate
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="최소 인원"
                  name="leastPeople"
                  value={formikProps.values.leastPeople}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.leastPeople) &&
                    formikProps.touched.leastPeople
                  }
                  helperText={
                    formikProps.errors.leastPeople &&
                    formikProps.touched.leastPeople
                  }
                />
              </Grid>
              <Grid item xs={12} container justify="space-around">
                <Button size="small" type="submit" color="secondary">
                  확인
                </Button>
                <Button
                  size="small"
                  onClick={() => setVisibility(false)}
                  color="default">
                  취소
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Popover>
  );
};

export default ScheduleForm;
