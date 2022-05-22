import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedMeetingIdStore } from "../../store/meetings";
import { MultiSelect } from "react-multi-select-component";
import Image from "next/image";

export default function MeetingDetails(props) {
  const { showMeetingModalStaus, selectedMeeting } = useSelector(
    (state) => state.meetings,
  );
  const [inputs, setInputs] = useState({
    meetingName: "",
    startDateTime: "",
    endDateTime: "",
  });
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(showMeetingModalStaus);
    if (selectedMeeting) {
      setInputs({
        meetingName: selectedMeeting.meetingName,
        startDateTime: selectedMeeting.startDateTime,
        endDateTime: selectedMeeting.endDateTime,
      });

      let selectedOption = [];
      emails.forEach((option) => {
        selectedMeeting.emailList.forEach((email) => {
          if (option.value == email) {
            selectedOption.push(option);
          }
        });
      });

      setParticipent(selectedOption);
    }
  }, [showMeetingModalStaus]);

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
    <>
      {showModal ? (
        <>
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Meeting Details</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() =>
                        dispatch(selectedMeetingIdStore(!showModal))
                      }>
                      <Image
                        src="/icons/close-icon.svg"
                        width={25}
                        height={25}
                        alt="closing-icon"
                      />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="flex flex-col w-full max-w-sm p-5">
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
                          EDIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
