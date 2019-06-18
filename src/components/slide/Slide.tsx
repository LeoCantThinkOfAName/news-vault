import React, { memo, useContext, useEffect, useRef, useState } from "react";

// context
import { MainContext } from "./../../contexts/MainContext";

// style
import style from "./slide.module.scss";

const Poster = ({ news, src }: { news: any; src: any }) => {
  const [loaded, setLoaded] = useState<boolean>(true);
  const img = useRef<HTMLImageElement | null>(null);

  const imageLoaded = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    if (img.current !== null) {
      img.current.addEventListener("load", () => imageLoaded());
    }
  }, []);

  return (
    <img
      style={{
        opacity: loaded ? 0.3 : 0,
        transition: loaded ? "0.5s ease-in-out" : "",
      }}
      src={src}
      alt={news.headline.main}
      className={style["main-image"]}
      ref={img}
    />
  );
};

const Slide = memo(() => {
  const {
    state: { singleNews },
  } = useContext(MainContext);

  const getJumbo = () => {
    const root = "https://www.nytimes.com/";

    const jumbo = singleNews.multimedia.find((media: any) => {
      return media.subtype === "jumbo";
    });

    if (jumbo) {
      return `${root}${jumbo.url}`;
    } else {
      return null;
    }
  };

  useEffect(() => {}, [singleNews]);

  return (
    singleNews && (
      <div className={style["slide"]}>
        <Poster news={singleNews} src={getJumbo()} />
        <div className={[style["text"], "container"].join(" ")}>
          <h2 className={style["title"]}>{singleNews.headline.main}</h2>
          <div className={style["summary"]}>
            <p>
              <span className={style["lead-char"]}>
                {singleNews.lead_paragraph.charAt(0)}
              </span>
              <span className={style["summary-main"]}>
                {singleNews.lead_paragraph.substr(1)}
              </span>
            </p>

            <a
              href={singleNews.web_url}
              target="_blank"
              rel="noopener noreferrer"
              className={style["keep-reading"]}
            >
              Read On New York Tims Website...
            </a>
          </div>
        </div>
      </div>
    )
  );
});

export default Slide;
