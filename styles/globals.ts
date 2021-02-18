import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    width: "70%",
    height: "70vh",
    marginTop: "5%",
    marginLeft: "20%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10rem"
  }
}));
