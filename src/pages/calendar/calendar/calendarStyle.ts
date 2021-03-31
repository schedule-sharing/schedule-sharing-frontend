import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    minWidth: "600px"
  },
  // header
  header: {
    height: "80px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  headerTitle: {
    color: theme.palette.secondary.dark,
    fontSize: theme.typography.h4.fontSize
  },
  // weekrow
  calHeader: {
    display: "flex",
    borderBottom: "3px solid",
    borderBottomColor: "rgba(255, 89, 131, .4)"
  },
  calHeaderItem: {
    flexBasis: "calc(100% / 7)",
    paddingLeft: theme.spacing(1)
  },

  // content
  content: {
    flex: "1",
    flexWrap: "wrap",
    display: "flex"
  },
  contentItem: {
    border: "1px solid",
    borderColor: theme.palette.grey.A100,
    flexBasis: "calc(100% / 7)",
    paddingLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
  },
  contentItemTitle: { marginRight: "45%" },
  contentItemUtilsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  contentItemIcon: {
    opacity: "0.05",
    cursor: "pointer",
    color: theme.palette.secondary.light,
    "&:hover": {
      opacity: "1"
    }
  },
  contentItemScheduleContainer: {
    border: "2px white solid",
    borderRadius: "10px",
    width: "95%",
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    "&:hover": {
      opacity: "0.7"
    },
    cursor: "pointer"
  },
  saturday: {
    color: "blue"
  },
  sunday: {
    color: "red"
  }
}));
