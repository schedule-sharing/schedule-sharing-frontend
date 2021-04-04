import { Button, Grid, makeStyles, Popover, TextField, Theme, Typography } from "@material-ui/core";
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { MyScheduleFormData } from "../../../store/reducers/scheduleReducer/myScheduleReducer";
import useMySchedule from "../../../utils/hooks/useMySchedule";

const initialValue: MyScheduleFormData = {
  name: "",
  contents: "",
  scheduleStartDate: new Date().toJSON().replace(/\.[0-9]{3}[A-Z]{1}/, ""),
  scheduleEndDate: new Date(Date.now() + 86400000).toJSON().replace(/\.[0-9]{3}[A-Z]{1}/, "")
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
  const { addMySchedule } = useMySchedule();
  const handleValidate = (values: MyScheduleFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "name 없음";
    }
  };
  const handleSubmit = (values: MyScheduleFormData) => {
    addMySchedule(values);
    setVisibility(false);
  };
  const handleDateChange = (
    formikProps: FormikProps<MyScheduleFormData>,
    fieldName: "scheduleStartDate" | "scheduleEndDate",
    value: MaterialUiPickersDate
  ) => {
    if (value) {
      formikProps.setFieldValue(fieldName, value.toJSON().replace(".000Z", ""));
      console.log(value.toJSON().replace(".000Z", ""));
    }
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
      <Formik initialValues={initialValue} validate={handleValidate} onSubmit={handleSubmit}>
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
                  error={Boolean(formikProps.errors.name) && formikProps.touched.name}
                  helperText={formikProps.errors.name && formikProps.touched.name}
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
                  error={Boolean(formikProps.errors.contents) && formikProps.touched.contents}
                  helperText={formikProps.errors.contents && formikProps.touched.contents}
                />
              </Grid>
              <Grid item xs={12}>
                <DateTimePicker
                  disableToolbar
                  variant="inline"
                  size="small"
                  label="시작날짜"
                  error={Boolean(formikProps.errors.scheduleStartDate) && formikProps.touched.scheduleStartDate}
                  helperText={formikProps.errors.scheduleStartDate && formikProps.touched.scheduleStartDate}
                  value={formikProps.values.scheduleStartDate}
                  onChange={(e) => handleDateChange(formikProps, "scheduleStartDate", e)}
                />
                {/* <TextField
                  fullWidth
                  size="small"
                  label="시작 날짜"
                  name="scheduleStartDate"
                  value={formikProps.values.scheduleStartDate}
                  onChange={formikProps.handleChange}
                 /> */}
              </Grid>

              <Grid item xs={12}>
                <DateTimePicker
                  disableToolbar
                  variant="inline"
                  size="small"
                  label="종료날짜"
                  error={Boolean(formikProps.errors.scheduleEndDate) && formikProps.touched.scheduleEndDate}
                  helperText={formikProps.errors.scheduleEndDate && formikProps.touched.scheduleEndDate}
                  value={formikProps.values.scheduleEndDate}
                  onChange={(e) => handleDateChange(formikProps, "scheduleEndDate", e)}
                />

                {/* <TextField
                  fullWidth
                  size="small"
                  label="종료 날짜"
                  name="scheduleEndDate"
                  value={formikProps.values.scheduleEndDate}
                  onChange={formikProps.handleChange}
                  error={Boolean(formikProps.errors.scheduleEndDate) && formikProps.touched.scheduleEndDate}
                  helperText={formikProps.errors.scheduleEndDate && formikProps.touched.scheduleEndDate}
                /> */}
              </Grid>
              <Grid item xs={12} container justify="space-around">
                <Button size="small" type="submit" color="secondary">
                  확인
                </Button>
                <Button size="small" onClick={() => setVisibility(false)} color="default">
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
