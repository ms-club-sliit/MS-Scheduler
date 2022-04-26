import React, { useState } from "react";
import { Header } from "../components";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { scheduleMeetingStore } from "../store/meetings";
import Router from "next/router";

export default function Create() {
  const dispatch = useDispatch();

  //handle values inserted by user
  const [inputs, setInputs] = useState({
    meetingName: "",
    startDateTime: "",
    endDateTime: "",
  });

  //handle participent emails seleted by user
  const [participent, setParticipent] = useState([]);

  const emails = [
    { label: "test1@gmail.com", value: "test1@gmail.com" },
    { label: "test2@gmail.com", value: "test2@gmail.com" },
    { label: "test3@gmail.com", value: "test3@gmail.com" },
    { label: "test4@gmail.com", value: "test4@gmail.com" },
    { label: "test5@gmail.com", value: "test5@gmail.com" },
    { label: "it19963402@my.sliit.lk", value: "it19963402@my.sliit.lk" },
  ];

  //validate meetingName,startDateTime,endingDateTime
  const submitValidation = () => {
    if (inputs.meetingName == "") {
      alert("Please input meeting name");
      return false;
    } else if (inputs.startDateTime == "") {
      alert("please input Starting Date and Time");
      return false;
    } else if (inputs.endDateTime == "") {
      alert("please input Ending Date and Time");
      return false;
    } else {
      return true;
    }
  };

  //handle when a user change value in a input field
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //handle submisson of form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (submitValidation()) {
      const meeting = {
        meetingName: inputs.meetingName,
        startDateTime: inputs.startDateTime,
        endDateTime: inputs.endDateTime,
        emailList: participent.map((i) => i.value),
      };
      console.log(meeting);
      dispatch(scheduleMeetingStore(meeting))
        .then(() => {
          Router.push("/meetings");
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-fit px-8 flex flex-col mx-auto justify-center my-10 gap-10">
        <div>
          <h2 className="text-4xl font-medium text-center leading-tight">
            Schedule a Meeting
          </h2>
        </div>
        <div className="flex flex-col w-full max-w-sm ">
          <form onSubmit={handleSubmit}>
            <div className="gap-9">
              <label htmlFor="meetingName" className="mx-1">
                Meeting name
              </label>
              <input
                type="text"
                name="meetingName"
                id="meetingName"
                placeholder="Meeting Name"
                value={inputs.meetingName || ""}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-blue-500 border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="startDateTime" className="mx-1">
                Starting Time
              </label>
              <input
                type="datetime-local"
                name="startDateTime"
                id="startDateTime"
                value={inputs.startDateTime || ""}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-blue-500 border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="endDateTime" className="mx-1">
                End Time
              </label>
              <input
                type="datetime-local"
                name="endDateTime"
                id="endDateTime"
                value={inputs.endDateTime || ""}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-blue-500 border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="participent" className="mx-1">
                Participents
              </label>

              <MultiSelect
                options={emails}
                value={participent}
                onChange={setParticipent}
                className="mb-6 "
              />

              <button
                type="submit"
                className="w-full border text-lg bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
