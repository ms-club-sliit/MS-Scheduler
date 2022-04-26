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
      console.log("getMeetings", response);
      return response;
    })
    .catch((error) => {
      console.log("error: ", error);
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
      console.log("scheduleMeeting", response);
      return response;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

const meetingService = { getMeetings, scheduleMeeting };
export default meetingService;
