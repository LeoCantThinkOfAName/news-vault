import axios from "axios";

export const FetchSingleNews = (news: any, callback: any) => {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const FILTER_QUERY = `web_url:("${news.web_url}")`;

  const params = {
    "api-key": APIKEY,
    fq: FILTER_QUERY,
  };

  axios
    .get(ENDPOINT, {
      params,
    })
    .then(res => callback(res.data.response.docs[0]))
    .catch(err => callback(null));
};
