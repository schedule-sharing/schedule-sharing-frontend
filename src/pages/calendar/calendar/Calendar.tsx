import { IconButton, Button } from "@material-ui/core";
import {
  AddBox,
  ArrowBack,
  ArrowForward,
  ShoppingBasket
} from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./calendarStyle";
import AddMyScheduleForm from "../form/AddMyScheduleForm";
import useAddMySchedule from "../../../utils/hooks/useAddMySchedule";
import { RootState } from "../../../store/reducers/rootReducer";
import {
  MySchedule,
  MyScheduleState
} from "../../../store/reducers/scheduleReducer/myScheduleReducer";

import MyScheduleDetail from "../../../components/schedule/myschedule/MyScheduleDetail";
import AddClubScheduleForm from "../form/AddClubScheduleForm";
import {
  ClubScheduleState,
  ClubSchedule
} from "../../../store/reducers/scheduleReducer/clubScheduleReducer";

const Calendar = () => {
  const { getMyScheduleList } = useAddMySchedule();
  const myScheduleListState: MyScheduleState = useSelector(
    (state: RootState) => state.myScheduleReducer
  );
  const { myScheduleList } = myScheduleListState;
  const [date, setDate] = useState<Array<DateType>>([
    { date: 0, day: 1, month: 1, year: 2020 }
  ]);
  const [formRef, setFormRef] = useState<HTMLElement | null>(null);
  const [formVisibility, setFormVisibility] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const detailInitalState = {
    myScheduleId: 0,
    name: "",
    contents: "",
    startDate: "",
    endDate: ""
  };
  const clubDetailInitialState = {
    id: 0,
    name: "",
    contents: "",
    startMeetingDate: "",
    endMeetingDate: "",
    memberName: "",
    memberEmail: ""
  };

  const [scheduleDetail, setScheduleDetail] = useState<
    MySchedule | ClubSchedule
  >(detailInitalState || clubDetailInitialState);
  // 날짜 구하는 로직
  const getDate = (year: number, month: number) => {
    let yearMonth = "";
    if (month < 9) {
      yearMonth = `${year.toString()}-0${(month + 1).toString()}`;
    } else yearMonth = `${year.toString()}-${(month + 1).toString()}`;
    getMyScheduleList(yearMonth);

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
  const handleClick = (schedule: MySchedule) => {
    setModalOpen(true);
    setScheduleDetail(schedule);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const myscheduleRendering = (dat: DateType) =>
    myScheduleList?.map((c) => (
      <div key={`mySchedule${c.name}`}>
        {parseInt(c?.startDate?.slice(8, 10), 10) <= dat.date &&
        parseInt(c?.endDate?.slice(8, 10), 10) >= dat.date ? (
          <div className={classes.contentItemScheduleContainer}>
            {scheduleDetailRendering(c)}
          </div>
        ) : null}
      </div>
    ));

  const scheduleDetailRendering = (schedule: MySchedule) => {
    const { name } = schedule;
    return (
      <>
        {/* onKeyDown={() => handleClick()} onClick={() => handleClick()} */}
        <Button onClick={() => handleClick(schedule)}>{name}</Button>
      </>
    );
  };

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
          <div className={classes.contentItemUtilsContainer}>
            <div className={classes.contentItemTitle}>{dat.date}</div>
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
          {myscheduleRendering(dat)}
        </div>
      ))}
    </>
  );

  const handleBtnClick = (type: string) => {
    let { year } = date[0];
    let { month } = date[0];
    if (type === "Back") {
      if (month === 0) {
        month = 11;
        year -= 1;
      } else {
        month -= 1;
      }
    } else if (type === "Forward") {
      if (month === 11) {
        month = 0;
        year += 1;
      } else {
        month += 1;
      }
    }
    getDate(year, month);
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
        <IconButton
          onClick={() => handleBtnClick("Back")}
          children={<ArrowBack />}
        />
        <div className={classes.headerTitle}>
          {`${date[0].year}년 ${date[0].month + 1}월`}
        </div>
        <IconButton
          onClick={() => handleBtnClick("Forward")}
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
      <AddMyScheduleForm
        anchorEl={formRef}
        visibility={formVisibility}
        setVisibility={setFormVisibility}
      />
      {/* <AddClubScheduleForm
        anchorEl={formRef}
        visibility={formVisibility}
        setVisibility={setFormVisibility}
      /> */}
      <MyScheduleDetail
        modalOpen={modalOpen}
        scheduleDetail={scheduleDetail as MySchedule}
        handleModalClose={() => handleModalClose()}
      />
    </div>
  );
};

export default Calendar;
