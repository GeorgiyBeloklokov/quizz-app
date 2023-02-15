import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { addQuestion, setQuestions } from '../reducers/questionSlice';
import { logout, setToken, setIsAuth } from '../reducers/userSlice';

export interface IQuestionCerate {
  id: string;
  image: string;
  description: string;
  userId: number;
}

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createQuestion: builder.mutation<IQuestionCerate[], IQuestionCerate[]>({
      query(data) {
        return {
          url: 'questions/create',
          method: 'POST',
          body: data,
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(`response questions =>>>>>>>>>>>>>>>>`, data);
          if (data) {
            //dispatch(setQuestions(data));
          }

          /* dispatch(setToken(data));
          dispatch(setIsAuth(true)); */
        } catch (error) {
          console.log(`error question response:`, error);
        }
      },
    }),
    /* logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'auth/logout',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {}
      },
    }), */
  }),
});

export const { useCreateQuestionMutation } = questionApi;
