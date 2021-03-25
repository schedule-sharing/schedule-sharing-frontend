import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContentContainer: {
    padding: "1.5% 4%",
    width: "70%",
    height: "40%",
    display: "flex",
    alignItems: "space-between",
    flexDirection: "column",
    justifyContent: "space-between",
    ".MuiDivider-root": {
      border: "2px solid black"
    }
  }
}));
