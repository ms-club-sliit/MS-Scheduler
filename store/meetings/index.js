import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import meetingService from "../../helpers/meetings.helper";

export const getMeetingsStore = createAsyncThunk(
  "meetings/getMeetings",
  async (thunkAPI) => {
    try {
      const res = await meetingService.getMeetings();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const scheduleMeetingStore = createAsyncThunk(
  "meetings/scheduleMeeting",
  async (meeting, thunkAPI) => {
    try {
      const res = await meetingService.scheduleMeeting(meeting);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  meetings: [],
};

export const meetingSlice = createSlice({
  name: "meetings",
  initialState,
  extraReducers: {
    [getMeetingsStore.fulfilled]: (state, action) => {
      state.meetings = action.payload;
    },
    [getMeetingsStore.rejected]: (state, action) => {
      state.meetings = [];
    },
    [scheduleMeetingStore.fulfilled]: (state, action) => {
      state.meetings.push(action.payload);
    },
    [scheduleMeetingStore.rejected]: (state, action) => {
      // state.meetings = [];
    },
  },
});

const { reducer } = meetingSlice;
export default reducer;
