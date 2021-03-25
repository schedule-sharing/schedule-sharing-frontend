import {
  Modal,
  Card,
  CardContent,
  Grid,
  Divider,
  Typography
} from "@material-ui/core";
import React from "react";
import { MySchedule } from "../../../store/reducers/scheduleReducer/myScheduleReducer";
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
  const { name, contents, startDate, endDate } = scheduleDetail;
  return (
    <>
      <Modal
        onClose={handleModalClose}
        className={classes.modalContainer}
        open={modalOpen}>
        <Card className={classes.modalContentContainer}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              {name}
            </Typography>
            <Divider style={{ marginBottom: "2%" }} />
            <Typography component="div" variant="body2">
              {contents}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default MyScheduleDetail;
