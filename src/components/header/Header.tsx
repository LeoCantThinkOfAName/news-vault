import React, { useState, useContext, memo } from "react";
import moment from "moment";

// context
import { MainContext, UPDATE_LOADING } from "./../../contexts/MainContext";

// helper
import { FetchSingleNews } from "./../Helper/FetchSingleNews";

// components
import CustomCalendar from "./../calendar/Calendar";

// styles
import style from "./header.module.scss";

const Header = memo(() => {
  const {
    state: { date, news },
    dispatch,
  } = useContext(MainContext);
  const [activate, setActivate] = useState<boolean>(false);

  const handleFocus = () => {
    setActivate(!activate);
  };

  const handleRefresh = () => {
    const randomNum = Math.floor(Math.random() * news.length);
    dispatch({ type: UPDATE_LOADING, payload: true });
    FetchSingleNews(news[randomNum], dispatch);
  };

  return (
    <header className={[style["header"], "header"].join(" ")}>
      <div className={[style["header-wrapper"], "container"].join(" ")}>
        <h1 className={style["logo"]}>❮NewsVault❯</h1>
        <div className={style["controls"]}>
          <button
            className={style["refresh-btn"]}
            onClick={() => handleRefresh()}
          >
            More On This Day...
          </button>
          <input
            className={style["date-input"]}
            type="date"
            readOnly
            value={moment(date).format("YYYY-MM-DD")}
            onClick={() => handleFocus()}
          />
          <CustomCalendar activate={activate} setActivate={setActivate} />
        </div>
      </div>
    </header>
  );
});

export default Header;
