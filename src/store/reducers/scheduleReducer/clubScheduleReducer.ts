export interface ClubSchedule {
  clubScheduleId: number;
  clubId: number;
  memberId: number;
  contents: string;
  name: string;
  scheduleStartDate: Date;
  scheduleEndDate: Date;
}

export interface ClubScheduleList {
  clubSchedule: ClubSchedule;
  clubScheduleList: ClubSchedule[];
}
