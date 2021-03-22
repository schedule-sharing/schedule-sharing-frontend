import { Modal, Paper } from "@material-ui/core";
import React from "react";
import MyScheduleDetailStyle from "./MyScheduleDetailStyle";

const MyScheduleDetail = ({
  modalOpen,
  handleModalClose
}: {
  modalOpen: boolean;
  handleModalClose: () => void;
}) => {
  const classes = MyScheduleDetailStyle();
  return (
    <>
      <Modal
        onClose={handleModalClose}
        className={classes.modalContainer}
        open={modalOpen}>
        <Paper className={classes.modalContentContainer}>dd</Paper>
      </Modal>
    </>
  );
};

export default MyScheduleDetail;
