import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    flex: "1",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2)
  }
}));
