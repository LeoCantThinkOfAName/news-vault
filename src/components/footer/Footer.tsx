import React from "react";
import moment from "moment";

import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={[style["footer"], "container", "footer"].join(" ")}>
      &copy; {moment().format("YYYY")} ❮NewsVault❯, Powered By New York Times
      API. <a href="https://lctoan.com">LCTOAN.</a>
    </footer>
  );
};

export default Footer;
