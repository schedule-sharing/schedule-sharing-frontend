type DateType = {
  year: number;
  month: number;
  day: number;
  date: number;
};
// "Mon" | "Tues" | "Wed" | "Thur" | "Fri" | "Sat" | "Sun"

type schudleAddType = {
  title: string;
  date: string;
  place: string;
  expireDate: string;
  leastPeople: string;
};
type clubAddType = {
  clubName: string;
  categories: string;
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
