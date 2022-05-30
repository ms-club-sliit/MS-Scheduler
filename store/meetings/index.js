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

export const selectedDeleteMeetingIdStore = createAsyncThunk(
  "meetings/scheduleMeeting/selectDeleteMeetingId",
  async (selectedDeleteMeeting, thunkAPI) => {
    try {
      return selectedDeleteMeeting;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteScheduleMeetingStore = createAsyncThunk(
  "meetings/scheduleMeeting/delete",
  async (deleteMeeting, thunkAPI) => {
    try {
      await meetingService.deleteScheduleMeeting(deleteMeeting.meetingId);
      return deleteMeeting.showModal;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  meetings: [],
  showMeetingModalStaus: false,
  selectedMeeting: null,
  showDeleteMeetingModalStaus: false,
  selectedDeleteMeeting: null,
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
    [selectedDeleteMeetingIdStore.fulfilled]: (state, action) => {
      state.showDeleteMeetingModalStaus = action.payload.showDeleteModal;
      state.selectedDeleteMeeting = action.payload.deleteMeetingDetails;
    },
    [deleteScheduleMeetingStore.fulfilled]: (state, action) => {
      state.showDeleteMeetingModalStaus = action.payload;
    },
    [deleteScheduleMeetingStore.rejected]: (state, action) => {
      state.showDeleteMeetingModalStaus = action.payload;
    },
  },
});

const { reducer } = meetingSlice;
export default reducer;
