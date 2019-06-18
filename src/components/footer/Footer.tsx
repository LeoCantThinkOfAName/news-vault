import React from "react";
import moment from "moment";

// styles
import style from "./footer.module.scss";

// logo
import logo from "../../images/poweredby_nytimes_65a.png";

const Footer = () => {
  return (
    <footer className={[style["footer"], "container", "footer"].join(" ")}>
      &copy; {moment().format("YYYY")} ❮NewsVault❯,{" "}
      <a href="https://lctoan.com">LCTOAN.</a>, Powered By New York Times API.{" "}
      <img src={logo} alt="Powered By NYT API" className={style["nyt-logo"]} />{" "}
    </footer>
  );
};

export default Footer;
