import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import CalendarLayout from "./pages/calendar/CalendarLayout";
import UserLayout from "./pages/user/UserLayout";
import HomeLayout from "./pages/home/HomeLayout";

function App() {
  return (
    <>
      {/* 개발완료후 삭제 */}
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/calendar" component={CalendarLayout} />
        <Route path="/" component={HomeLayout} />
      </Switch>
      {/* 개발완료후 삭제 */}
      <div
        className="App"
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
          <Link to="/calendar">calendar 로 가기</Link>
        </div>
        <div>
          <Link to="/">홈으로가기</Link>
        </div>
        <div> timetreeapp.com 처럼 간단한 설명 화면 렌더링</div>
      </div>
    </>
  );
}

export default App;
