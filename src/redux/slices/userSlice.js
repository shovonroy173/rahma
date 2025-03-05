// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const userSlice = createApi({
//   reducerPath: 'user',
//   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
//   tagTypes: ['getUserTag'],

//   endpoints: () => ({}),
// });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:5000' }),
  tagTypes: ['getUserTag'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => `/api/getuser?email=${email}`,
      providesTags: ['getUserTag'],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/api/user',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['getUserTag'],
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userSlice;
