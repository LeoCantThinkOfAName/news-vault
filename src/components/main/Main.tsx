import React, { useContext } from "react";

// context
import { MainContext } from "./../../contexts/MainContext";

// components
import SlideTransition from "./../slide/SlideTransition";
import Spinner from "../spinner/Spinner";

// styles
import style from "./main.module.scss";

const Main = () => {
  const { loading, news, singleNews } = useContext(MainContext);

  return (
    <main className={[style["main"]].join(" ")} style={{ color: "#fff" }}>
      <SlideTransition loading={loading} />
      <Spinner loading={loading} banned={!news && !singleNews ? true : false} />
    </main>
  );
};

export default Main;
