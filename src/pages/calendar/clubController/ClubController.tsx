import { IconButton, makeStyles, Theme, Typography } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import { match, RouteComponentProps } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    "& div": {}
  },

  title: {
    textTransform: "uppercase"
  },
  titlebox: {
    flex: 1
  }
}));
type ClubController = {
  title: string;
};
const ClubController = ({ title }: ClubController) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
      </div>
      <div>
        <IconButton size="small" children={<Settings />} />
      </div>
    </div>
  );
};

export default ClubController;
