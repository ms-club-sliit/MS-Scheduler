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

export const selectedMeetingIdStore = createAsyncThunk(
  "meetings/scheduleMeeting/selectMeetingId",
  async (selectedMeeting, thunkAPI) => {
    try {
      return selectedMeeting;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const editScheduleMeetingStore = createAsyncThunk(
  "meetings/editScheduleMeeting",
  async (meeting, thunkAPI) => {
    try {
      const res = await meetingService.editScheduleMeeting(meeting);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  meetings: [],
  showMeetingModalStaus: false,
  selectedMeeting: null,
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
    [selectedMeetingIdStore.fulfilled]: (state, action) => {
      state.showMeetingModalStaus = action.payload.showModal;
      state.selectedMeeting = action.payload.meetingDetails;
    },

    [editScheduleMeetingStore.fulfilled]: (state, action) => {
      state.meetings = state.meetings.map((meeting) => {
        if (meeting._id === action.payload._id) {
          return action.payload;
        }
        return meeting;
      });
    },

    [editScheduleMeetingStore.rejected]: (state, action) => {
      // state.meetings = [];
    },
  },
});

const { reducer } = meetingSlice;
export default reducer;
