import { Button, Grid, makeStyles, Popover, TextField, Theme, Typography } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { AddClubScheduleFormData } from "../../../store/reducers/scheduleReducer/clubScheduleReducer";
import useClubSchedule from "../../../utils/hooks/useClubSchedule";

const initialValue: AddClubScheduleFormData = {
  clubId: 0,
  name: "",
  contents: "",
  startMeetingDate: "",
  endMeetingDate: ""
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "200px",
    height: "400px",
    padding: theme.spacing(1),
    overflow: "hidden"
  }
}));
const AddClubScheduleForm = ({
  clubId,
  visibility,
  anchorEl,
  setVisibility
}: {
  clubId: string;
  visibility: boolean;
  anchorEl: HTMLElement | null;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { addClubSchedule } = useClubSchedule();
  const handleValidate = (values: AddClubScheduleFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "name 없음";
    }
  };

  const handleSubmit = (values: AddClubScheduleFormData) => {
    const realValues = { ...values, clubId: parseInt(clubId, 10) };
    addClubSchedule(realValues);
    setVisibility(false);
  };
  const handleDateChange = (
    formikProps: FormikProps<AddClubScheduleFormData>,
    fieldName: "startMeetingDate" | "endMeetingDate",
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
                  error={Boolean(formikProps.errors.startMeetingDate) && formikProps.touched.startMeetingDate}
                  helperText={formikProps.errors.startMeetingDate && formikProps.touched.startMeetingDate}
                  value={formikProps.values.startMeetingDate}
                  onChange={(e) => handleDateChange(formikProps, "startMeetingDate", e)}
                />
              </Grid>

              <Grid item xs={12}>
                <DateTimePicker
                  disableToolbar
                  variant="inline"
                  size="small"
                  label="시작날짜"
                  error={Boolean(formikProps.errors.endMeetingDate) && formikProps.touched.endMeetingDate}
                  helperText={formikProps.errors.endMeetingDate && formikProps.touched.endMeetingDate}
                  value={formikProps.values.endMeetingDate}
                  onChange={(e) => handleDateChange(formikProps, "endMeetingDate", e)}
                />
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

export default AddClubScheduleForm;
