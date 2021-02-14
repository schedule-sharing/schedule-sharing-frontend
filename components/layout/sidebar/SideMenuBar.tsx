import React, { ReactComponentElement } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Avatar, Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

const SideMenuBar: React.FC<{
  children?: ReactComponentElement<any, any>;
}> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}>
        <MenuIcon />
      </IconButton>
      {/* drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <div className={classes.drawerIcon}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Avatar
                src="https://cdnweb01.wikitree.co.kr/webdata/editor/202009/23/img_20200923081643_5ab21941.webp"
                className={classes.drawerAvatar}
              />
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    hyunjae
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>마지막 접속 6일전</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <List>
          {["동네 친구", "학교", "여자친구"].map((text) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText
                classes={{ primary: classes.listText }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <Grid container justify="center">
          <IconButton classes={{ root: classes.addIcon }}>
            <AddIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
        <div className={classes.drawerHeader} />
      </main>
      {children}
    </div>
  );
};

export default SideMenuBar;
