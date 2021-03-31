type DateType = {
  year: number;
  month: number;
  day: number;
  date: number;
};
// "Mon" | "Tues" | "Wed" | "Thur" | "Fri" | "Sat" | "Sun"

type scheduleAddType = {
  title: string;
  date: string;
  place: string;
  expireDate: string;
  leastPeople: string;
};

type clubType = {
  clubName: string;
  categories: string;
  clubId?: string;
};
// user
type SignUpFormValue = {
  email: string;
  name: string;
  password: string;
  imagePath: string;
  confirmPassword?: string;
};
type LoginFormValue = {
  email: string;
  password: string;
};
type user = {
  email: string;
  id: string; // number 형 데이터 stringify
  imagePath: string;
  name: string;
};
