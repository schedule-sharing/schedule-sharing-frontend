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
const dates1 = [
  { date: "1", dow: 1 },
  { date: "2", dow: 2 },
  { date: "3", dow: 3 },
  { date: "4", dow: 4 },
  { date: "5", dow: 5 },
  { date: "6", dow: 6 },
  { date: "7", dow: 0 },
  { date: "8", dow: 1 },
  { date: "9", dow: 2 },
  { date: "10", dow: 3 },
  { date: "11", dow: 4 },
  { date: "12", dow: 5 },
  { date: "13", dow: 6 },
  { date: "14", dow: 0 },
  { date: "15", dow: 1 },
  { date: "16", dow: 2 },
  { date: "17", dow: 3 },
  { date: "18", dow: 4 },
  { date: "19", dow: 5 },
  { date: "20", dow: 6 },
  { date: "21", dow: 0 },
  { date: "22", dow: 1 },
  { date: "23", dow: 2 },
  { date: "24", dow: 3 },
  { date: "25", dow: 4 },
  { date: "26", dow: 5 },
  { date: "27", dow: 6 },
  { date: "28", dow: 0 },
  { date: "29", dow: 1 },
  { date: "30", dow: 2 },
  { date: "31", dow: 3 }
];
const Calendar = () => {
  const [date, setDate] = useState<Array<DateType>>([
    { date: 0, day: 1, month: 1, year: 2020 }
  ]);
  // 날짜 구하는 로직
  const getDate = (year: number, month: number) => {
    const arr: Array<DateType> = [];

    // 해당월의 마지막날짜 구하는 로직
    const endOfMonth = new Date(year, month + 1, 0).getDate();

    // 해당 월의 날짜배열들
    for (let i = 1; i <= endOfMonth; i += 1) {
      arr.push({
        year,
        month,
        date: i,
        day: new Date(year, month, i).getDay()
      });
    }
    setDate(arr);
  };
  useEffect(() => {
    // 초기마운트시  오늘 날짜 기준으로날짜 설정
    const today = new Date(); // new Date(2021, 1, 3); 2월 3일 기준으로 날짜
    const dat = {
      year: today.getFullYear(),
      month: today.getMonth()
    };
    getDate(dat.year, dat.month);
  }, []);

  const dateRendering = (dates: Array<DateType>) => (
    <>
      <div style={{ flexBasis: `calc((100% / 7)*${date[0].day})` }} />
      {dates.map((dat) => (
        <div
          key={`year+month+${dat.date} `}
          className={clsx({
            [classes.contentItem]: true,
            [classes.saturday]: dat.day === 6,
            [classes.sunday]: dat.day === 0
          })}>
          <div>{dat.date}</div>
        </div>
      ))}
    </>
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        headercontents
        <div>{`${date[0].month + 1}월`}</div>
      </div>
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
      <div className={classes.content}>{dateRendering(date)}</div>
    </div>
  );
};

export default Calendar;
