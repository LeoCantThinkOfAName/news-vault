import React, { createContext, useState, useEffect } from "react";
import moment from "moment";

// helper
import { CalculateNYT } from "./../components/Helper/CalculateNYT";
import { FetchNews } from "../components/Helper/FetchNews";
import { FetchSingleNews } from "./../components/Helper/FetchSingleNews";

export const MainContext = createContext<any>(null);

export const MainProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(moment(CalculateNYT()).format("YYYY-MM-DD"));
  const [news, setNews] = useState([]);
  const [singleNews, setSingleNews] = useState(null);

  const getRandomNews = () => {
    return Math.floor(Math.random() * news.length);
  };

  useEffect(() => {
    setLoading(true);
    FetchNews(date, setNews);
  }, [date]);

  useEffect(() => {
    setLoading(true);
    console.log("meow");
    if (news[0]) {
      FetchSingleNews(news[getRandomNews()], setSingleNews);
    } else {
      setSingleNews(null);
    }
  }, [news]);

  useEffect(() => {
    if (singleNews) {
      setLoading(false);
    }
  }, [singleNews]);

  return (
    <MainContext.Provider
      value={{
        news,
        setNews,
        singleNews,
        setSingleNews,
        date,
        setDate,
        loading,
        setLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
