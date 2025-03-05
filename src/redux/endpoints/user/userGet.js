import {userSlice} from '../../slices/userSlice';

const getUserEndpoint = userSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/api/getuser',
      providesTags: ['getUserTag'],
    }),
  }),
});

export const {useGetUserQuery} = getUserEndpoint;
