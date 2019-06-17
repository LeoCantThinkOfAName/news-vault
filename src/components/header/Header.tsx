import React, { useState, useContext, memo } from "react";
import moment from "moment";

// context
import { MainContext } from "./../../contexts/MainContext";

// helper
import { FetchSingleNews } from "./../Helper/FetchSingleNews";

// components
import CustomCalendar from "./../calendar/Calendar";

// styles
import style from "./header.module.scss";

const Header = memo(() => {
  const { date, news, setSingleNews, setLoading } = useContext(MainContext);
  const [activate, setActivate] = useState<boolean>(false);

  const handleFocus = () => {
    setActivate(!activate);
  };

  const handleRefresh = () => {
    const randomNum = Math.floor(Math.random() * news.length);
    setLoading(true);
    FetchSingleNews(news[randomNum], setSingleNews);
  };

  return (
    <header className={[style["header"], "container", "header"].join(" ")}>
      <h1 className={style["logo"]}>❮NewsVault❯</h1>
      <div>
        <button onClick={() => handleRefresh()}>REFRESH</button>
        <input
          className={style["date-input"]}
          type="date"
          readOnly
          value={moment(date).format("YYYY-MM-DD")}
          onClick={() => handleFocus()}
        />
        <CustomCalendar activate={activate} setActivate={setActivate} />
      </div>
    </header>
  );
});

export default Header;
