import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const AlertDialog = ({ visibility, setVisibility, text }: { visibility: boolean; setVisibility: (v: boolean) => void; text: string }) => {
  const handleClose = () => {
    setVisibility(false);
  };
  return (
    <Dialog open={visibility} onClose={handleClose}>
      <DialogTitle>알림</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
