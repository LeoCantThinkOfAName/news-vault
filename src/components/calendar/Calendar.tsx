import React, { useEffect, useState, useContext, memo } from "react";
import moment from "moment";
import Calendar from "react-calendar";

// context
import { MainContext } from "./../../contexts/MainContext";

// helper
import { CalculateNYT } from "./../Helper/CalculateNYT";

// styles
import style from "./calendar.module.scss";

const CustomCalendar = memo(({ activate, setActivate }: any) => {
  const { date, setDate } = useContext(MainContext);
  const [ny, setNy] = useState<Date>(new Date());

  const deActivate = () => {
    setActivate(false);
  };

  const handleSelect = (value: any) => {
    setDate(moment(value).format("YYYY-MM-DD"));
    deActivate();
  };

  useEffect(() => {
    const nyDate = CalculateNYT();
    setDate(moment(nyDate).format("YYYY-MM-DD"));
    setNy(nyDate);
  }, []);

  return (
    activate && (
      <>
        <div className={style["overlay"]} onClick={() => deActivate()} />
        <Calendar
          calendarType="US"
          className={[style["calendar"]]}
          tileClassName={[style["days"], style["months"], style["years"]]}
          value={new Date(date)}
          maxDate={ny}
          minDate={new Date("2000-01-01")}
          onChange={value => handleSelect(value)}
        />
      </>
    )
  );
});

export default CustomCalendar;
