import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    "& div": {}
  },

  title: {
    textTransform: "uppercase",
    color: theme.palette.secondary.dark
  },
  titlebox: {
    flex: 1,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  settingbox: {
    paddingRight: theme.spacing(2)
  }
}));
