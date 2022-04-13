import React, { useState } from "react";
import { Header } from "../components";

export default function Create() {
  //handle current value inserted by user
  const [inputs, setInputs] = useState({
    meetingName: "",
    startDateTime: "",
    endDateTime: "",
    email: "",
  });
  //handle the emails already added
  const [list, setlist] = useState([]);

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

  //handle validating and adding email to the list
  const AddMember = () => {
    const validEmail =
      inputs.email.lastIndexOf("@") < inputs.email.lastIndexOf(".") &&
      inputs.email.lastIndexOf("@") > 0 &&
      inputs.email.indexOf("@@") == -1 &&
      inputs.email.lastIndexOf(".") > 2 &&
      inputs.email.length - inputs.email.lastIndexOf(".") > 2;
    if (inputs.email == "") {
      alert("please input a Email");
    } else if (!validEmail) {
      alert("please input a valid email");
    } else if (list.some((e) => e == inputs.email)) {
      alert("email already added");
    } else {
      const newList = list.concat(inputs.email);
      setlist(newList);
      setInputs((previousState) => {
        return { ...previousState, email: "" };
      });
    }
  };

  //handle submisson of form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (submitValidation()) {
      console.log(
        inputs.meetingName +
          "\n" +
          inputs.startDateTime +
          "\n" +
          inputs.endDateTime +
          "\n" +
          list,
      );
    }
  };

  //calling addMember function when user presses enter on add participent field
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      AddMember();
    }
  };
  //remove participent from list when selected
  const handleParticipent = (event) => {
    const value = event.target.value;
    const newList = list.filter((item) => item !== value);
    setlist(newList);
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
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="startDateTime" className="mx-1">
                Starting Time
              </label>
              <input
                type="datetime-local"
                name="startDateTime"
                id="startDateTime"
                value={inputs.startDateTime || ""}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="endDateTime" className="mx-1">
                End Time
              </label>
              <input
                type="datetime-local"
                name="endDateTime"
                id="endDateTime"
                value={inputs.endDateTime || ""}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="email" className="mx-1">
                Add Patricipents{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Add members"
                value={inputs.email || ""}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-6"></input>

              <label htmlFor="participent" className="mx-1">
                Participents
              </label>
              <select
                id="participent"
                value=""
                name="participent"
                onChange={handleParticipent}
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-6">
                <option value=""> Remove Participents</option>
                {list.map((list, index) => (
                  <option key={index} value={list}>
                    {list}
                  </option>
                ))}
              </select>

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
