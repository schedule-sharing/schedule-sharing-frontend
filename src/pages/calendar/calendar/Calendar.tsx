import React, { useState } from "react";
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
  const [date, setDate] = useState<DateType>({
    year: "",
    month: "",
    day: "",
    startOfMonth: "Mon"
  });
  const dateLogic = () => {
    const date = new Date();
  };
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
  console.log(new Date().getMonth());
  const dateRendering = (dates: Array<{ date: string; dow: string }>) => {
    let empty = 0;
    switch (dates[0].dow) {
      case "Mon":
        empty = 0;
        break;
      case "Tues":
        empty = 1;
        break;
      case "Wed":
        empty = 2;
        break;
      case "Thur":
        empty = 3;
        break;
      case "Fri":
        empty = 4;
        break;
      case "Sat":
        empty = 5;
        break;
      case "Sun":
        empty = 6;
        break;
      default:
        break;
    }
    return (
      <>
        <div style={{ flexBasis: `calc((100% / 7)*${empty})` }} />
        {dates.map((date) => (
          <div
            key={`year+month+${date.date} `}
            className={clsx({
              [classes.contentItem]: true,
              [classes.saturday]: date.dow === "Sat",
              [classes.sunday]: date.dow === "Sun"
            })}>
            <div>{date.date}</div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>headercontents</div>
      {/* weekrow */}
      <div className={classes.calHeader}>
        <div className={classes.calHeaderItem}>M</div>
        <div className={classes.calHeaderItem}>T</div>
        <div className={classes.calHeaderItem}>W</div>
        <div className={classes.calHeaderItem}>T</div>
        <div className={classes.calHeaderItem}>F</div>
        <div className={classes.calHeaderItem}>S</div>
        <div className={classes.calHeaderItem}>S</div>
      </div>
      {/* contents */}
      <div className={classes.content}>{dateRendering(dates1)}</div>
    </div>
  );
};

export default Calendar;
