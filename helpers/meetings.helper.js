import axios from "axios";
import authService from "./auth.helper";

const getMeetings = () => {
  return axios
    .get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/meeting/internal", {
      headers: authService.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const meetingService = { getMeetings };
export default meetingService;
