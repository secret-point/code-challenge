import dayjs, { Dayjs } from "dayjs";

export const toISOFormat = (dateRange: Dayjs | string | null) => {
  return dayjs(dateRange).format("YYYY-MM-DD");
};
