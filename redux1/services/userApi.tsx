import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { updateUserField, userSlice } from '../slices';
import { axiosBaseQuery } from './axiosBaseQuery';
import { RootState } from '../store';
import { IUser } from '../../models';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(),
  // baseQuery: fetchBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getUserDetails: builder.query<IUser, string>({ 
      query: (id) => ({ 
        url: 'user',
        params: {
          id
        },
        method: 'GET'
      })
    }),
    getUser: builder.query({
      query: () => ({ 
          url: 'user', 
          method: 'GET'
      }),
    }),
    updateUserDetails: builder.mutation<IUser, Partial<IUser> | { key: keyof IUser, value: any }>({
      query: (update) => ({
        url: 'user',
        method: 'PUT',
        data: ('key' in update) ? { [update.key]: update.value } : { ...update } // This will send either a single field update or multiple fields
      }),
      async onQueryStarted(update, { dispatch, queryFulfilled, getState }) {
        // Optimistic Updating
        // Save the current user state before the update
        const previousUser = (getState() as RootState).user.data;

        // Check if the update contains a single field or multiple fields
        if ('key' in update) {
          // If it's a single field, optimistically update that field
          dispatch(updateUserField(update));
        } else {
          // If it's a partial IUser object, optimistically update the user
          dispatch(userSlice.actions.updateUser(update));
        }

        try {
          // Wait for the query to be fulfilled
          await queryFulfilled;
        } catch {
          // If the query fails, roll back to the previous state
          dispatch(userSlice.actions.updateUser(previousUser));
        }
      },
    }),
  }),
});

// auto-generated based on the defined endpoints
export const { 
  useGetUserQuery,
  useGetUserDetailsQuery,
  // useUpdateUserDetailsMutation
} = userApi
