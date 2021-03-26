import React from "react";
import { Button, Grid, Popover, makeStyles, Theme } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import useClub from "../../../../utils/hooks/reducer/useClub";

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
  const { asyncRemoveClub, clubs } = useClub();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const handleClubDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("클럽을 정말 삭제하시겠습니까?")) {
      if (id === "mycalendar") {
        alert("mycalendar는 삭제할 수 없습니다.");
        return;
      }
      if (await asyncRemoveClub(id)) window.location.reload();
      // if (clubs.clubs.find((v) => v.clubId === id)) asyncRemoveClub(id);
    }
  };
  const handleClubModify = () => {
    //
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
          <Button>클럽 수정</Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleClubDelete}>클럽 삭제</Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default ClubSettingForm;
