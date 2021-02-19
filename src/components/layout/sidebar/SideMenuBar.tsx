import { Avatar, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Link from "next/link";
import React from "react";
import sideBarStyle from "./sideMenuBarStyle";

const SideMenuBar: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const classes = sideBarStyle();

  return (
    <div className={classes.root}>
      {/* drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        open
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
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
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SideMenuBar;
