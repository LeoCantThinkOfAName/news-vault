import axios from "axios";

export const FetchNews = (date: string, callback: any) => {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const FILTER_LIMIT = "web_url,lead_paragraph,headline,_id";
  const FILTER_QUERY = `pub_date:("${date}") AND source:("The New York Times")`;

  const params = {
    "api-key": APIKEY,
    fq: FILTER_QUERY,
    fl: FILTER_LIMIT,
  };

  axios
    .get(ENDPOINT, {
      params,
    })
    .then(res => {
      callback(res.data.response.docs);
    })
    .catch(err => callback([]));
};
