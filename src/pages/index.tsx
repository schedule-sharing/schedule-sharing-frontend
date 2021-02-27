import React from "react";
import Link from "next/link";
import Head from "next/head";
import Applayout from "../components/layout/common/appLayout/Applayout";

export default function index() {
  return (
    <>
      <Applayout>
        <Head>
          <title>user</title>
        </Head>
        <div> 단순 개발용임</div>
        <div>
          <Link href="/user">user 로 가기</Link>
        </div>
        <div>
          <Link href="/calendar">calendar 로 가기</Link>
        </div>

        <div> timetreeapp.com 처럼 간단한 설명 화면 렌더링</div>
      </Applayout>
    </>
  );
}
