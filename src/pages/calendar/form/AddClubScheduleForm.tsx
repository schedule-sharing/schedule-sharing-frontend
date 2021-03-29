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
                  name="startMeetingDate"
                  value={formikProps.values.startMeetingDate}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.startMeetingDate) &&
                    formikProps.touched.startMeetingDate
                  }
                  helperText={
                    formikProps.errors.startMeetingDate &&
                    formikProps.touched.startMeetingDate
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="종료 날짜"
                  name="endMeetingDate"
                  value={formikProps.values.endMeetingDate}
                  onChange={formikProps.handleChange}
                  error={
                    Boolean(formikProps.errors.endMeetingDate) &&
                    formikProps.touched.endMeetingDate
                  }
                  helperText={
                    formikProps.errors.endMeetingDate &&
                    formikProps.touched.endMeetingDate
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

export default AddClubScheduleForm;
