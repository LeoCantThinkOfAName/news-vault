import React, { createContext, useEffect, useReducer } from "react";
import moment from "moment";

// helper
import { CalculateNYT } from "./../components/Helper/CalculateNYT";
import { FetchNews } from "../components/Helper/FetchNews";
import { FetchSingleNews } from "./../components/Helper/FetchSingleNews";

export const UPDATE_DATE = "UPDATE_DATE";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const UPDATE_SINGLENEWS = "UPDATE_SINGLENEWS";
export const UPDATE_LOADING = "UPDATE_LOADING";
export const UPDATE_BANNED = "UPDATE_BANNED";

let mainState = {
  loading: true,
  date: moment(CalculateNYT()).format("YYYY-MM-DD"),
  news: [],
  singleNews: null,
  banned: false,
};

const reducer = (
  state: any,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case UPDATE_DATE:
      return {
        ...state,
        date: moment(payload).format("YYYY-MM-DD"),
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case UPDATE_NEWS:
      return {
        ...state,
        news: payload,
      };
    case UPDATE_SINGLENEWS:
      return {
        ...state,
        singleNews: payload,
      };
    case UPDATE_BANNED:
      return {
        ...state,
        banned: payload,
      };
    default:
      throw new Error();
  }
};

export const MainContext = createContext<any>(null);

export const MainProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, mainState);
  const { news, date, singleNews, loading } = state;

  const getRandomNews = () => {
    return Math.floor(Math.random() * news.length);
  };

  useEffect(() => {
    dispatch({ type: UPDATE_LOADING, payload: true });
    FetchNews(date, dispatch);
  }, [date]);

  useEffect(() => {
    dispatch({ type: UPDATE_LOADING, payload: true });
    if (news[0]) {
      FetchSingleNews(news[getRandomNews()], dispatch);
    } else {
      // dispatch({type: UPDATE_SINGLENEWS, });
    }
  }, [news]);

  useEffect(() => {
    if (singleNews) {
      dispatch({ type: UPDATE_LOADING, payload: false });
    }
  }, [singleNews]);

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
