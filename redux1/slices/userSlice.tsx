// Best practice recommends keeping slices in feature folders...
// https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic
// However this doesnt make sence when global state is used accross multiple features

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser, IUserPermissions } from '../../models';
import { userApi } from '../services/userApi';

export interface IUserState {
  data: IUser;
}

const initialState: IUserState = {
data: {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  profilePicture: "",
  locale: "",
  newsletter: false,
  shippingDetails: {
    address: "",
    suburb: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  },
  permissions: [],
}
};

// const JWTToken = localStorage.getItem('JWTToken') ? localStorage.getItem('JWTToken') : null

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateUserField: (state, action: PayloadAction<{ key: keyof IUser, value: any }>) => {
      const { key, value } = action.payload;
      
      if (key === 'permissions') {
        console.warn("updateUserField should not be used for 'permissions'. Use 'updateUserPermissions' instead.");
        return;
      }

      if (key in state.data) {
        // Use type assertion to bypass TypeScript's type checking
        // state.data[key] = value;
        (state.data as any)[key] = value;
      }
    },
    updateUserPermissions: (state, action: PayloadAction<IUserPermissions[]>) => {
      state.data.permissions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getUserDetails.matchFulfilled,
        (state, { payload }) => {
          state.data = payload;
        }
      );
  }
});

export const { updateUser, updateUserField } = userSlice.actions;

export default userSlice.reducer;

