import {
  Avatar,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Drawer,
  IconButton,
  Typography
} from "@material-ui/core";
import { Add, Settings } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClubForm from "../../pages/club/form/Clubform";
import sideBarStyle from "./sideMenuBarStyle";
import useClub from "../../utils/hooks/reducer/useClub";

const SideMenuBar: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const classes = sideBarStyle();
  const { clubs } = useClub();
  const [clubForm, setClubForm] = useState<boolean>(true);
  const handleClubFormVisibility = () => {
    setClubForm((prev) => !prev);
  };
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
          <IconButton size="small" children={<Settings />} />
          <Grid container spacing={3}>
            <Grid container item xs={12}>
              <Grid item xs={5}>
                <Avatar
                  src="https://cdnweb01.wikitree.co.kr/webdata/editor/202009/23/img_20200923081643_5ab21941.webp"
                  className={classes.drawerAvatar}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h5" align="center">
                  hyunjae
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography>마지막 접속 6일전</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>FE 개발자</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <List className={classes.list}>
          {clubs.clubs.map((club: clubType, i) => (
            <Link
              key={`유저이름추가하기${club.clubName}${i.toString()}`}
              to={`/calendar/${club.clubName}`}>
              <ListItem className={classes.listItem} button>
                <ListItemText>
                  <Typography
                    align="center"
                    children={club.clubName}
                    variant="h6"
                  />
                </ListItemText>
              </ListItem>
            </Link>
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
