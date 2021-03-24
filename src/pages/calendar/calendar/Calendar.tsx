import { IconButton } from "@material-ui/core";
import {
  AddBox,
  ArrowBack,
  ArrowForward,
  ShoppingBasket
} from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useClub from "../../../utils/hooks/reducer/useClub";
import ScheduleForm from "../form/ScheduleForm";
import useStyles from "./calendarStyle";

const Calendar = () => {
  const [date, setDate] = useState<Array<DateType>>([
    { date: 0, day: 1, month: 1, year: 2020 }
  ]);

  const { asyncGetClub } = useClub();
  const [formRef, setFormRef] = useState<HTMLElement | null>(null);
  const [formVisibility, setFormVisibility] = useState(false);
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
    asyncGetClub();
    getDate(dat.year, dat.month);
  }, [asyncGetClub]);
  const dateRendering = (dates: Array<DateType>) => (
    <>
      <div style={{ flexBasis: `calc((100% / 7)*${dates[0].day})` }} />
      {dates.map((dat) => (
        <div
          key={`year+month+${dat.date} `}
          className={clsx({
            [classes.contentItem]: true,
            [classes.saturday]: dat.day === 6,
            [classes.sunday]: dat.day === 0
          })}>
          <div className={classes.contentItemTitle}>{dat.date}</div>
          <div className={classes.contentItemBtnContainer}>
            <IconButton
              onClick={(e) => handleAddBtnClick(e)}
              className={classes.contentItemIcon}
              size="small"
              children={<AddBox />}
            />
            <IconButton
              className={classes.contentItemIcon}
              size="small"
              children={<ShoppingBasket />}
            />
          </div>
        </div>
      ))}
    </>
  );
  const handleForwardBtnClick = () => {
    let { year } = date[0];
    let { month } = date[0];
    if (month === 11) {
      month = 0;
      year += 1;
    } else {
      month += 1;
    }
    getDate(year, month);
  };
  const handleBackBtnClick = () => {
    let { year } = date[0];
    let { month } = date[0];
    if (month === 0) {
      month = 11;
      year -= 1;
    } else {
      month -= 1;
    }
    getDate(year, month);
  };
  const handleScheduleAddFormVisibility = () => {
    setFormVisibility((prev) => !prev);
  };
  const handleAddBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFormVisibility(true);
    setFormRef(e.currentTarget);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <IconButton onClick={handleBackBtnClick} children={<ArrowBack />} />
        <div className={classes.headerTitle}>
          {`${date[0].year}년 ${date[0].month + 1}월`}
        </div>
        <IconButton
          onClick={handleForwardBtnClick}
          children={<ArrowForward />}
        />
      </div>
      {/* weekrow */}
      <div className={classes.calHeader}>
        {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((v) => (
          <div className={classes.calHeaderItem} key={v} children={v} />
        ))}
      </div>
      {/* contents */}
      <div className={classes.content}>{dateRendering(date)}</div>
      <ScheduleForm
        anchorEl={formRef}
        visibility={formVisibility}
        setVisibility={handleScheduleAddFormVisibility}
      />
    </div>
  );
};

export default Calendar;
