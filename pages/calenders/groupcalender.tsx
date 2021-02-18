import { useRouter } from "next/dist/client/router";
import React from "react";

const GroupCalender = () => {
  const router = useRouter();
  const query = router.query.title;
  return (
    <div>
      {query}
      그룹
    </div>
  );
};

export default GroupCalender;
