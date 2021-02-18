import { makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main
  },
  drawerHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: "16px",
    paddingBottom: "10px"
  },
  drawerIcon: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
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
  listText: {
    fontSize: "30px"
  },
  addIcon: {
    width: "50px",
    height: "50px",
    color: theme.palette.secondary.main
  }
}));
