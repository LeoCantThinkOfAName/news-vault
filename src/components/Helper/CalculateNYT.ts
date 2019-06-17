import moment from "moment";

export const CalculateNYT = () => {
  let nyDate;
  if (moment().utcOffset() > 0) {
    nyDate = new Date().getTime() - moment().utcOffset() * 60000 - 14400000;
  } else if (moment().utcOffset() < 0) {
    nyDate = new Date().getTime() + moment().utcOffset() * 60000 + 14400000;
  } else {
    nyDate = new Date().getTime() - 14400000;
  }
  return new Date(nyDate - 86400000);
};
