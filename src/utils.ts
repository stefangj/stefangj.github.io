import moment from "moment";

export const formatDate = (
  startDateString: string,
  endDateString?: string
): string => {
  const startDate = moment(startDateString).format("MM/YYYY");
  const endDate = endDateString
    ? moment(endDateString).format("MM/YYYY")
    : "Present";

  return [startDate, endDate].join(" - ");
};
