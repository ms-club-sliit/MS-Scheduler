import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { scheduleMeetingStore, getMeetingsStore } from "../../store/meetings";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Popup(props) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    meetingName: "",
    startDateTime: "",
    endDateTime: "",
  });

  const [participent, setParticipent] = useState([]);

  const emails = [
    { value: "it19132310@my.sliit.lk", label: "Lasal Hettiarchchi" },
    { value: "it19139036@my.sliit.lk", label: "Senura Jayadeva" },
    { value: "it19104218@my.sliit.lk", label: "Rusiru Abisheak" },
    { value: "it19131184@my.sliit.lk", label: "Yasiru Randika" },
    { value: "it19120980@my.sliit.lk", label: "Dilmi Palliyaguruge" },
    { value: "it20281632@my.sliit.lk", label: "Nisal Palliyaguru" },
    { value: "it19963402@my.sliit.lk", label: "Miyuru Gnanarathna" },
    { value: "it19115344@my.sliit.lk", label: "Hansidu Maniyangama" },
    { value: "it19102924@my.sliit.lk", label: "Lahiru Jayasinghe" },
    { value: "it20633790@my.sliit.lk", label: "Susith Rupasinghe" },
    { value: "it20006884@my.sliit.lk", label: "Shivani Rajkumar" },
    { value: "it20224820@my.sliit.lk", label: "Upendra Ihalagedara" },
    { value: "it20023614@my.sliit.lk", label: "Pasindu Wijesingha" },
  ];

  const submitValidation = () => {
    if (inputs.meetingName == "") {
      toast.error("Please input meeting name");
      return false;
    } else if (inputs.startDateTime == "") {
      toast.error("please input Starting Date and Time");
      return false;
    } else if (inputs.endDateTime == "") {
      toast.error("please input Ending Date and Time");
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (submitValidation()) {
      const meeting = {
        meetingName: inputs.meetingName,
        startDateTime: inputs.startDateTime,
        endDateTime: inputs.endDateTime,
        emailList: participent.map((i) => i.value),
      };
      dispatch(scheduleMeetingStore(meeting))
        .then(() => {
          props.close();
          toast.success("Meeting schedule success!");
          dispatch(getMeetingsStore());
        })
        .catch(() => {
          props.close();
          toast.error("Something went wrong!");
        });
    }
  };

  return (
    <div className="mx-auto relative">
      <div className="flex flex-col justify-center p-4 bg-white gap-4 m-8 md:m-16 border border-black/10 rounded-md">
        <div>
          <h4 className="text-2xl font-medium text-center leading-tight">
            Schedule a Meeting
          </h4>
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
      <div className="absolute z-10 -right-3 -top-3 m-8 md:m-16">
        <button
          onClick={props.close}
          className="m-0 p-0 border border-black/10 w-[27px] h-[27px] rounded-full shadow-sm">
          <Image
            src="/icons/close-icon.svg"
            width={25}
            height={25}
            alt="closing-icon"
            className="border border-black/50 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
