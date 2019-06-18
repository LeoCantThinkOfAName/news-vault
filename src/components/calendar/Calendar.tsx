import React, { useEffect, useState, useContext, memo } from "react";
import moment from "moment";
import Calendar from "react-calendar";

// context
import { MainContext, UPDATE_DATE } from "./../../contexts/MainContext";

// helper
import { CalculateNYT } from "../../Helper/CalculateNYT";

// styles
import style from "./calendar.module.scss";

const CustomCalendar = memo(({ activate, setActivate }: any) => {
  const {
    state: { date },
    dispatch,
  } = useContext(MainContext);
  const [ny, setNy] = useState<Date>(new Date());

  const deActivate = () => {
    setActivate(false);
  };

  const handleSelect = (value: any) => {
    dispatch({
      type: UPDATE_DATE,
      payload: moment(value).format("YYYY-MM-DD"),
    });
    deActivate();
  };

  useEffect(() => {
    const nyDate = CalculateNYT();
    dispatch({
      type: UPDATE_DATE,
      payload: moment(nyDate).format("YYYY-MM-DD"),
    });
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
