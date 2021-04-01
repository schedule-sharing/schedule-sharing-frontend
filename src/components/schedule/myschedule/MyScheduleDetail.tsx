import { Button, Card, CardContent, Divider, IconButton, Modal, TextField, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { MySchedule, MyScheduleFormData } from "../../../store/reducers/scheduleReducer/myScheduleReducer";
import useMySchedule from "../../../utils/hooks/useMySchedule";
import myScheduleDetailStyle from "./myScheduleDetailStyle";

const MyScheduleDetail = ({
  modalOpen,
  scheduleDetail,
  handleModalClose
}: {
  modalOpen: boolean;
  scheduleDetail: MySchedule;
  handleModalClose: () => void;
}) => {
  const classes = myScheduleDetailStyle();
  const { updateMySchedule, deleteMySchedule } = useMySchedule();
  const { name, contents, startDate, endDate, myScheduleId } = scheduleDetail;
  const [currentId, setCurrentId] = useState(0);
  const initialValues: MyScheduleFormData = {
    name,
    contents,
    scheduleStartDate: startDate,
    scheduleEndDate: endDate
  };

  const handleValidate = (values: MyScheduleFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "name 없음";
    }
  };
  const handleSubmit = (values: MyScheduleFormData) => {
    updateMySchedule(myScheduleId, values);
  };

  const handleClickDelete = () => {
    deleteMySchedule(myScheduleId);
    handleModalClose();
  };
  const handleClickUpdate = () => {
    setCurrentId(myScheduleId);
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
                value={formikProps.values.scheduleStartDate}
                onChange={formikProps.handleChange}
                error={Boolean(formikProps.errors.scheduleStartDate) && formikProps.touched.scheduleStartDate}
                helperText={formikProps.errors.scheduleStartDate && formikProps.touched.scheduleStartDate}
              />
              <TextField
                fullWidth
                size="small"
                label="종료 날짜"
                name="scheduleEndDate"
                value={formikProps.values.scheduleEndDate}
                onChange={formikProps.handleChange}
                error={Boolean(formikProps.errors.scheduleEndDate) && formikProps.touched.scheduleEndDate}
                helperText={formikProps.errors.scheduleEndDate && formikProps.touched.scheduleEndDate}
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
        <Card className={currentId === myScheduleId ? classes.updateModalContentContainer : classes.detailModalContentContainer}>
          {currentId === myScheduleId ? <UpdateRendering /> : <DetailRendering />}
        </Card>
      </Modal>
    </>
  );
};

export default MyScheduleDetail;
