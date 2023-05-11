import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: [],
  },
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },

    clearTeam: (state) => {
      state.members = [];
    },

    removeMember: (state, action) => {
      state.members.pop();
    },
  },
});

export const { addMember, removeMember, clearTeam } = teamSlice.actions;
export default teamSlice.reducer;
