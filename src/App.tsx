import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import CalendarLayout from "./pages/calendar/CalendarLayout";

import UserLayout from "./pages/user/UserLayout";
import HomeLayout from "./pages/home/HomeLayout";
import ClubCalendarLayout from "./pages/calendar/ClubCalendarLayout";
import Auth from "./utils/hoc/Auth";

function App() {
  return (
    <>
      {/* TODO: USER관련 API 구현 */}
      <div className="App">
        <Switch>
          <Route path="/calendar/mycalendar" component={Auth(CalendarLayout)} />
          <Route path="/calendar/club/:clubId" component={Auth(ClubCalendarLayout)} />
          <Route path="/user" component={Auth(UserLayout)} />
          <Route exact path="/calendar" render={() => <Redirect to="/calendar/my" />} />
          {/*
          <Route path="/calendar/:id" component={Auth(CalendarLayout)} />
          */}
          <Route path="/" component={HomeLayout} />
        </Switch>
      </div>
      {/* 개발완료후 삭제 */}
      <div
        style={{
          backgroundColor: "beige",
          position: "absolute",
          padding: "0 30px",
          bottom: "0",
          width: "100%",
          zIndex: 10000000
        }}>
        <div> 단순 개발용</div>
        <div>
          <Link to="/user">user 로 가기</Link>
        </div>
        <div>
          <Link to="/calendar/mycalendar">calendar 로 가기</Link>
        </div>
        <div>
          <Link to="/">홈으로가기</Link>
        </div>
        <div> timetreeapp.com 처럼 간단한 설명 화면 렌더링</div>
      </div>
      {/* 개발완료후 삭제 */}
    </>
  );
}

export default App;
