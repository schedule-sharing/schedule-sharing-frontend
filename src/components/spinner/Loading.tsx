import { Backdrop, CircularProgress, makeStyles, Theme } from "@material-ui/core";
import React from "react";

type Loading = {
  isLoading: boolean;
  label?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.modal
  }
}));
const Loading = ({ isLoading, label }: Loading) => {
  const classes = useStyles();
  return (
    <>
      <Backdrop className={classes.root} open={isLoading}>
        <CircularProgress color="secondary" />
        {label}
      </Backdrop>
    </>
  );
};
export default Loading;
