import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContentContainer: {
    width: "70%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));
