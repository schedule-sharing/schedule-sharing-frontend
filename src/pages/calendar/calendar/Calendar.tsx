import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    height: "80px",
    backgroundColor: theme.palette.primary.main
  },
  calHeader: {
    display: "flex",
    borderBottom: "3px solid",
    borderBottomColor: "rgba(255, 89, 131, .4)"
  },
  calHeaderItem: {
    flexBasis: "calc(100% / 7)",
    paddingLeft: theme.spacing(1)
  },
  content: {
    flex: "1",
    flexWrap: "wrap",
    display: "flex"
  },
  contentItem: {
    border: "1px solid",
    borderColor: theme.palette.grey.A100,
    flexBasis: "calc(100% / 7)",
    paddingLeft: theme.spacing(1)
  },
  saturday: {
    color: "blue"
  },
  sunday: {
    color: "red"
  }
}));

const Calendar = () => {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
    startOfMonth: 0
  });
  const dateLogic = () => {
    // 날짜 로직
    const date = new Date();
    setDate({
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      day: date.getDate().toString(),
      startOfMonth: date.getDate()
    });
  };
  useEffect(() => {
    dateLogic();
  }, []);
  const classes = useStyles();
  // date rendering example
  const dates1 = [
    { date: "1", dow: "Mon" },
    { date: "2", dow: "Tues" },
    { date: "3", dow: "Wed" },
    { date: "4", dow: "Thur" },
    { date: "5", dow: "Fri" },
    { date: "6", dow: "Sat" },
    { date: "7", dow: "Sun" },
    { date: "8", dow: "Mon" },
    { date: "9", dow: "Tues" },
    { date: "10", dow: "Wed" },
    { date: "11", dow: "Thur" },
    { date: "12", dow: "Fri" },
    { date: "13", dow: "Sat" },
    { date: "14", dow: "Sun" },
    { date: "15", dow: "Mon" },
    { date: "16", dow: "Tues" },
    { date: "17", dow: "Wed" },
    { date: "18", dow: "Thur" },
    { date: "19", dow: "Fri" },
    { date: "20", dow: "Sat" },
    { date: "21", dow: "Sun" },
    { date: "22", dow: "Mon" },
    { date: "23", dow: "Tues" },
    { date: "24", dow: "Wed" },
    { date: "25", dow: "Thur" },
    { date: "26", dow: "Fri" },
    { date: "27", dow: "Sat" },
    { date: "28", dow: "Sun" },
    { date: "29", dow: "Mon" },
    { date: "30", dow: "Tues" },
    { date: "31", dow: "Wed" }
  ];
  const dateRendering = (dates: Array<{ date: string; dow: string }>) => (
    <>
      <div style={{ flexBasis: `calc((100% / 7)*${date.startOfMonth})` }} />
      {dates.map((dat) => (
        <div
          key={`year+month+${dat.date} `}
          className={clsx({
            [classes.contentItem]: true,
            [classes.saturday]: dat.dow === "Sat",
            [classes.sunday]: dat.dow === "Sun"
          })}>
          <div>{dat.date}</div>
        </div>
      ))}
    </>
  );
  return (
    <div className={classes.root}>
      <div className={classes.header}>headercontents</div>
      {/* weekrow */}
      <div className={classes.calHeader}>
        <div className={classes.calHeaderItem}>S</div>
        <div className={classes.calHeaderItem}>M</div>
        <div className={classes.calHeaderItem}>T</div>
        <div className={classes.calHeaderItem}>W</div>
        <div className={classes.calHeaderItem}>T</div>
        <div className={classes.calHeaderItem}>F</div>
        <div className={classes.calHeaderItem}>S</div>
      </div>
      {/* contents */}
      <div className={classes.content}>{dateRendering(dates1)}</div>
    </div>
  );
};

export default Calendar;
