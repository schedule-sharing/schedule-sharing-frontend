import React, { useEffect } from "react";
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
import { AddMyScheduleFormData } from "../../../store/reducers/scheduleReducer/myScheduleReducer";
import useAddMySchedule from "../../../utils/hooks/useAddMySchedule";

const initialValue: AddMyScheduleFormData = {
  name: "",
  contents: "",
  scheduleStartDate: "",
  scheduleEndDate: ""
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
  const { addMySchedule } = useAddMySchedule();
  const handleValidate = (values: AddMyScheduleFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "name 없음";
    }
  };
  const handleSubmit = (values: AddMyScheduleFormData) => {
    addMySchedule(values);
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
        initialValues={initialValue}
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
                  name="name"
                  value={formikProps.values.name}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.name) && formikProps.touched.name
                  }
                  helperText={
                    formikProps.errors.name && formikProps.touched.name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="내용"
                  name="contents"
                  value={formikProps.values.contents}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.contents) &&
                    formikProps.touched.contents
                  }
                  helperText={
                    formikProps.errors.contents && formikProps.touched.contents
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="시작 날짜"
                  name="scheduleStartDate"
                  value={formikProps.values.scheduleStartDate}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.scheduleStartDate) &&
                    formikProps.touched.scheduleStartDate
                  }
                  helperText={
                    formikProps.errors.scheduleStartDate &&
                    formikProps.touched.scheduleStartDate
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="종료 날짜"
                  name="scheduleEndDate"
                  value={formikProps.values.scheduleEndDate}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.scheduleEndDate) &&
                    formikProps.touched.scheduleEndDate
                  }
                  helperText={
                    formikProps.errors.scheduleEndDate &&
                    formikProps.touched.scheduleEndDate
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
