import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  detailModalContentContainer: {
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
  },
  updateModalContentContainer: {
    padding: "1.5% 4%",
    width: "70%",
    height: "60%",
    display: "flex",
    alignItems: "space-between",
    flexDirection: "column",
    justifyContent: "space-between",
    ".MuiDivider-root": {
      border: "2px solid black"
    }
  }
}));
