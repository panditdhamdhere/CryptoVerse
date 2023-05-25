// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {
//   "X-BingApis-SDK": "true",
//   "X-RapidAPI-Key": "c645d0747dmsh19eceae0536224bp1afb11jsn2f7da17e7ba0",
//   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
// };

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: "cryptoNewsApi",
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//       getCryptoNews: builder.query({
//         query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//       }),
//     }),
//   });

//   export const {useGetCryptoNewsQuery} = cryptoNewsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;