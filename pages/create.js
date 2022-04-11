import React, { useState } from "react";
import { Header } from "../components";

export default function Create() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  var emailList = [];
  var i;

  const handleAddMember = () => {
    emailList[i++] = inputs.email;
    // setInputs({email:""});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      inputs.meetingName +
        "\n" +
        inputs.startDateTime +
        "\n" +
        inputs.endDateTime +
        "\n",
    );
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
                value={inputs.meetingName}
                onChange={handleChange}
                required
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="startDateTime" className="mx-1">
                Starting Time
              </label>
              <input
                type="datetime-local"
                name="startDateTime"
                id="startDateTime"
                value={inputs.startDateTime}
                onChange={handleChange}
                required
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="endDateTime" className="mx-1">
                End Time
              </label>
              <input
                type="datetime-local"
                name="endDateTime"
                id="endDateTime"
                value={inputs.endDateTime}
                onChange={handleChange}
                required
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="email" className="mx-1">
                Add Patricipents{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Add members"
                value={inputs.email}
                onChange={handleChange}
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-6"></input>

              <button
                type="button"
                onClick={handleAddMember}
                className="w-fit border text-xs bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3 mb-6 ">
                Add member
              </button>

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
