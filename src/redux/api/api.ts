/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        method: "GET",
        url: "/movies",
      }),
      providesTags: ["movies"],
    }),
    getSingleMovie: builder.query({
      query: (slug : string) => ({
        method: "GET",
        url: `/movies/${slug}`,
      }),
      providesTags: ["movies"],
    }),
    addRating: builder.mutation({
      query: ({ data, slug }) => {
        return {
          method: "POST",
          url: `/movies/${slug}/review`,
          body: data,
        };
      },
      invalidatesTags: ["movies"],
    }),
    getMoviesReview: builder.query({
      query: (slug) => {
        return {
          method: "GET",
          url: `/movies/${slug}/reviews`,
          // movies/the-matrix-31-03-1999/reviews
        };
      },
      providesTags: ["movies"],
    }),
  }),
});

export const { useGetMoviesQuery, useAddRatingMutation, useGetSingleMovieQuery, useGetMoviesReviewQuery } = baseApi;
