import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import ClubForm from "../../pages/calendar/form/club/Clubform";
import useClub from "../../utils/hooks/reducer/useClub";
import useUser from "../../utils/hooks/reducer/useUser";
import sideBarStyle from "./sideMenuBarStyle";
import useClub from "../../utils/hooks/reducer/useClub";

const SideMenuBar: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { clubs, selectClub } = useClub();
  const { user, logout } = useUser();
  const [clubForm, setClubForm] = useState<boolean>(false);
  const handleClubFormVisibility = () => {
    setClubForm((prev) => !prev);
  };
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
            <Grid container item xs={12}>
              <Grid item xs={5}>
                <Avatar
                  src={user.user.imagePath}
                  className={classes.drawerAvatar}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h5" align="center">
                  {user.user.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" item xs={12}>
              <Typography>{user.user.email}</Typography>
              <Grid item container justify="flex-end" xs={12}>
                <Button
                  onClick={logout}
                  size="small"
                  color="secondary"
                  variant="contained">
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <List className={classes.list}>
          {clubs.clubs.map((club: clubType) => (
            <ListItem
              key={club.clubName + club.clubId}
              className={classes.listItem}
              style={
                club.clubId === clubs.currentClub.clubId
                  ? { backgroundColor: "orangered" }
                  : { backgroundColor: "inherit" }
              }
              onClick={() => selectClub(club.clubId!)}
              button>
              <ListItemText>
                <Typography
                  align="center"
                  children={club.clubName}
                  variant="h6"
                />
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <Grid container justify="center">
          <IconButton
            onClick={handleClubFormVisibility}
            classes={{ root: classes.addIcon }}>
            <Add fontSize="large" />
          </IconButton>
        </Grid>
      </Drawer>
      <main className={classes.content}>{children}</main>
      <ClubForm
        visibility={clubForm}
        setVisibility={handleClubFormVisibility}
      />
    </div>
  );
};

export default SideMenuBar;
