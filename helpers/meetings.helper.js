import axios from "axios";
import authService from "./auth.helper";
import store from "../store";
import { logout } from "../store/auth";

const getMeetings = () => {
  return axios
    .get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/meeting/internal", {
      headers: authService.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      store.dispatch(logout());
    });
};

const scheduleMeeting = (meeting) => {
  return axios
    .post(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/meeting/internal",
      meeting,
      {
        headers: authService.authHeader(),
      },
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {});
};

// Edit meeting by id
const editScheduleMeeting = (meeting) => {
  return axios
    .put(
      process.env.NEXT_PUBLIC_API_ENDPOINT + `/api/meeting/${meeting.id}`,
      meeting,
      {
        headers: authService.authHeader(),
      },
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {});
};

const meetingService = { getMeetings, scheduleMeeting, editScheduleMeeting };
export default meetingService;
