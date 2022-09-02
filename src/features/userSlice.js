import { createSlice } from '@reduxjs/toolkit';

// userSlice states
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// export userSLice functions
export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

// export reducer
export default userSlice.reducer;
