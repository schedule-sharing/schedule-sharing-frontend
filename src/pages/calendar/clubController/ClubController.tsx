import { IconButton, Typography } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (clubs.clubs.findIndex((v) => v.clubId === id) === -1) {
      history.push("mycalendar");
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <Typography className={classes.title} variant="h3">
          {clubs.clubs.find((v) => v.clubId === id)?.clubName}
        </Typography>
      </div>
      <div className={classes.settingbox}>
        <IconButton
          size="medium"
          children={<Settings />}
          onClick={(e) => handleSettingBtnClick(e.currentTarget)}
        />
        <ClubSettingForm
          anchorEl={ref}
          visibility={settingFormvisibility}
          setVisibility={setSettingFormVisibility}
        />
      </div>
    </div>
  );
};

export default ClubController;
