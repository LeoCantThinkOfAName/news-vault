import React, { memo } from "react";

// style
import style from "./spinner.module.scss";

const Spinner = memo(({ loading, banned }: any) => {
  return (
    loading && (
      <div className={style["spinner"]}>
        <div className={style["spinner-wrapper"]}>
          <div>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>
            {banned ? "API Limit Reached!, Please Try Again Later" : "Loading"}
          </p>
        </div>
      </div>
    )
  );
});

export default Spinner;
