import React, { createContext, useState, useEffect, useReducer } from "react";
import moment from "moment";

// helper
import { CalculateNYT } from "./../components/Helper/CalculateNYT";
import { FetchNews } from "../components/Helper/FetchNews";
import { FetchSingleNews } from "./../components/Helper/FetchSingleNews";

export const UPDATE_DATE = "UPDATE_DATE";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const UPDATE_SINGLENEWS = "UPDATE_SINGLENEWS";
export const UPDATE_LOADING = "UPDATE_LOADING";

let mainState = {
  loading: true,
  date: moment(CalculateNYT()).format("YYYY-MM-DD"),
  news: [],
  singleNews: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        ...mainState,
        date: moment(action.payload).format("YYYY-MM-DD"),
      };
    case UPDATE_LOADING:
      return {
        ...mainState,
        loading: true,
      };
    default:
      throw new Error();
  }
};

export const MainContext = createContext<any>(null);

export const MainProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(moment(CalculateNYT()).format("YYYY-MM-DD"));
  const [news, setNews] = useState([]);
  const [singleNews, setSingleNews] = useState(null);

  const [state, dispatch] = useReducer(reducer, mainState);

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
      dispatch({ type: UPDATE_LOADING, payload: true });
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
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
