import React, { ReactComponentElement } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
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
import AddIcon from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Grid } from "@material-ui/core";
import sideBarStyle from "../../../styles/sidebar/sideMenuBarStyle";

const SideMenuBar: React.FC<{
  children?: ReactComponentElement<any, any>;
}> = ({ children }) => {
  const classes = sideBarStyle();
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
            <Link
              key={text}
              href={{
                pathname: "/calenders/groupcalender",
                query: { title: text }
              }}>
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText
                  classes={{ primary: classes.listText }}
                  primary={text}
                />
              </ListItem>
            </Link>
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
