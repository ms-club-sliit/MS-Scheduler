import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedDeleteMeetingIdStore,
  deleteScheduleMeetingStore,
  getMeetingsStore,
} from "../../store/meetings";
import Image from "next/image";

export default function MeetingDelete(props) {
  const { showDeleteMeetingModalStaus, selectedDeleteMeeting } = useSelector(
    (state) => state.meetings,
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(showDeleteMeetingModalStaus);
  }, [showDeleteMeetingModalStaus]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(scheduleMeetingStore())
      .then(() => {
        props.close();
        toast.success("Meeting deleted success!");
        dispatch(getMeetingsStore());
      })
      .catch(() => {
        props.close();
        toast.error("Something went wrong!");
      });
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
                    <h3 className="text-xl font-semibold">Remove Meeting</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() =>
                        dispatch(selectedDeleteMeetingIdStore(!showModal))
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
                  <div className="p-5">
                    <p>Are you sure about deleting this Meeting ?</p>
                    <div className="p-5">
                      <div className="flex justify-end">
                        <div>
                          <button
                            type="submit"
                            className="border text-sm bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3"
                            onClick={() =>
                              dispatch(selectedDeleteMeetingIdStore(!showModal))
                            }>
                            No
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              const data = {
                                showModal: !showModal,
                                meetingId: selectedDeleteMeeting._id,
                              };
                              dispatch(
                                deleteScheduleMeetingStore(
                                  data,
                                  selectedDeleteMeeting,
                                ),
                              );
                              dispatch(getMeetingsStore());
                            }}
                            type="submit"
                            className="border text-sm bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3">
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
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
