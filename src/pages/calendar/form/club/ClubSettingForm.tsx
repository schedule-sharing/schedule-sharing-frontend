
import { Button, Grid, makeStyles, Popover, Theme } from "@material-ui/core";
import React, { useState } from "react";
import useClub from "../../../../utils/hooks/reducer/useClub";
import ClubModifyForm from "./ClubModifyForm";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    pdding: theme.spacing(3)
  }
}));
type ClubSettingForm = {
  anchorEl: HTMLElement | null;
  setVisibility: (bool: boolean) => void;
  visibility: boolean;
};
const ClubSettingForm = ({
  anchorEl,
  setVisibility,
  visibility
}: ClubSettingForm) => {
  const classes = useStyles();

  const [visi, setVisi] = useState(false);
  const { asyncRemoveClub, asyncModifyClub, clubs } = useClub();
  const handleClubDelete = async () => {
    if (!clubs.currentClub.clubId) {
      alert("선택된 클럽이 없습니다");
      return;
    }
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`정말 ${clubs.currentClub.clubName}을 삭제하시겠습니까?`))
      await asyncRemoveClub(clubs.currentClub.clubId!);
  };
  const handleBtnClick = () => {
    setVisi((prev) => !prev);
  };
  return (
    <Popover
      onBackdropClick={() => setVisibility(false)}
      anchorEl={anchorEl}
      open={visibility}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}>
      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <Button onClick={handleBtnClick}>클럽 수정</Button>
          <ClubModifyForm setVisibility={handleBtnClick} visibility={visi} />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleClubDelete}>클럽 삭제</Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default ClubSettingForm;
