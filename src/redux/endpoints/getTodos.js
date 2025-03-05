import {apiSlice} from '../apiSlice';

const getTodos = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodo: builder.query({
      query: () => '/todos',
      providesTags: ['getTodoTag'],
    }),
  }),
});

export const {useGetTodoQuery} = getTodos;
