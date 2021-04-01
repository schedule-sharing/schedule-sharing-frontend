import { IconButton, Typography } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React, { useState } from "react";
import useClub from "../../../utils/hooks/reducer/useClub";
import ClubSettingForm from "../form/club/ClubSettingForm";
import useStyles from "./clubControllerStyle";

const ClubController = () => {
  const classes = useStyles();
  const { clubs } = useClub();
  const [settingFormvisibility, setSettingFormVisibility] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const handleSettingBtnClick = (tar: HTMLButtonElement) => {
    setSettingFormVisibility((prev) => !prev);
    setRef(tar);
  };

  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <Typography className={classes.title} variant="h3">
          {clubs.currentClub.clubName ? clubs.currentClub.clubName : "myCalendar"}
        </Typography>
      </div>
      <div className={classes.settingbox}>
        <IconButton size="medium" children={<Settings />} onClick={(e) => handleSettingBtnClick(e.currentTarget)} />
        <ClubSettingForm anchorEl={ref} visibility={settingFormvisibility} setVisibility={setSettingFormVisibility} />
      </div>
    </div>
  );
};

export default ClubController;
