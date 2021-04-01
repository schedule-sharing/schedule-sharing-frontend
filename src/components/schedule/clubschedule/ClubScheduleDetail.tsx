import { Button, Card, CardContent, Divider, IconButton, Modal, TextField, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ClubSchedule, UpdateClubScheduleFormData } from "../../../store/reducers/scheduleReducer/clubScheduleReducer";
import useClubSchedule from "../../../utils/hooks/useClubSchedule";
import clubScheduleDetailStyle from "./clubScheduleDetailStyle";

const ClubScheduleDetail = ({
  modalOpen,
  scheduleDetail,
  handleModalClose
}: {
  modalOpen: boolean;
  scheduleDetail: ClubSchedule;
  handleModalClose: () => void;
}) => {
  const classes = clubScheduleDetailStyle();
  const { updateClubSchedule, deleteClubSchedule } = useClubSchedule();
  const { id, name, contents, startMeetingDate, endMeetingDate } = scheduleDetail;
  const [currentId, setCurrentId] = useState(0);
  const initialValues: UpdateClubScheduleFormData = {
    name,
    contents,
    startMeetingDate,
    endMeetingDate
  };

  const handleValidate = (values: UpdateClubScheduleFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "name 없음";
    }
  };
  const handleSubmit = (values: UpdateClubScheduleFormData) => {
    updateClubSchedule(id, values);
  };

  const handleClickDelete = () => {
    deleteClubSchedule(id);
    handleModalClose();
  };
  const handleClickUpdate = () => {
    setCurrentId(id);
  };
  const DetailRendering = () => (
    <>
      <CardContent>
        <IconButton onClick={handleClickDelete}>
          <DeleteForeverIcon />
        </IconButton>
        <IconButton onClick={handleClickUpdate}>
          <UpdateIcon />
        </IconButton>
        <Typography gutterBottom variant="h4">
          {name}
        </Typography>
        <Divider style={{ marginBottom: "2%" }} />
        <Typography component="div" variant="body2">
          {contents}
        </Typography>
      </CardContent>
    </>
  );

  const UpdateRendering = () => (
    <>
      <CardContent>
        <Formik initialValues={initialValues} validate={handleValidate} onSubmit={handleSubmit}>
          {(formikProps) => (
            <Form>
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
              <Divider style={{ marginBottom: "2%" }} />
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
              <TextField
                fullWidth
                size="small"
                label="시작 날짜"
                name="scheduleStartDate"
                value={formikProps.values.startMeetingDate}
                onChange={formikProps.handleChange}
                error={Boolean(formikProps.errors.startMeetingDate) && formikProps.touched.startMeetingDate}
                helperText={formikProps.errors.startMeetingDate && formikProps.touched.startMeetingDate}
              />
              <TextField
                fullWidth
                size="small"
                label="종료 날짜"
                name="scheduleEndDate"
                value={formikProps.values.endMeetingDate}
                onChange={formikProps.handleChange}
                error={Boolean(formikProps.errors.endMeetingDate) && formikProps.touched.endMeetingDate}
                helperText={formikProps.errors.endMeetingDate && formikProps.touched.endMeetingDate}
              />
              <Button size="small" type="submit" color="secondary">
                확인
              </Button>
              <Button
                size="small"
                onClick={() => {
                  handleModalClose();
                  setCurrentId(0);
                }}
                color="default">
                취소
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </>
  );
  return (
    <>
      <Modal
        onClose={() => {
          handleModalClose();
          setCurrentId(0);
        }}
        className={classes.modalContainer}
        open={modalOpen}>
        <Card className={currentId === id ? classes.updateModalContentContainer : classes.detailModalContentContainer}>
          {currentId === id ? <UpdateRendering /> : <DetailRendering />}
        </Card>
      </Modal>
    </>
  );
};

export default ClubScheduleDetail;
