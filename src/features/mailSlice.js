import { createSlice } from '@reduxjs/toolkit';

// mailSlice states
export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

// export mailSlice functions
export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

// Selectors
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

// export reducer
export default mailSlice.reducer;
