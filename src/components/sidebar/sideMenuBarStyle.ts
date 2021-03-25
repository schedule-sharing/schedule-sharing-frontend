import { makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 180;

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "100%"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    height: "100%"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: theme.palette.secondary.main
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main
  },
  drawerHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(5)
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  divider: {
    backgroundColor: theme.palette.primary.dark
  },
  drawerAvatar: {
    width: "75px",
    height: "75px"
  },
  list: { padding: "0" },
  listItem: { padding: "0" },
  addIcon: {
    width: "50px",
    height: "50px",
    color: theme.palette.secondary.main
  }
}));
