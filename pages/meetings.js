import { useEffect, useState } from "react";
import { Header } from "../components";
import MeetingCard from "../components/Meeting-card";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingsStore } from "../store/meetings";

export default function Meetings() {
  const state = useSelector((state) => state.meetings);
  const [meetings, setMeetings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingsStore());
  }, [dispatch]);

  useEffect(() => {
    console.log(state);
    setMeetings(state.meetings);
  }, [state.meetings]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="w-full">
          <div className="max-w-6xl mx-auto flex px-8 mt-5 mb-3 sm:px-16">
            <div className="px-2 py-1 bg-purple-700 rounded mr-3 text-white">
              COMING UP
            </div>
            <div className="px-2 py-1 bg-slate-100 rounded mr-3 text-gray-600">
              WRAPPED
            </div>
            <div className="px-2 py-1 bg-slate-100 rounded mr-3 text-gray-600">
              DELETED
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-8 mb-16 sm:px-16">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
              {meetings.map((meeting, key) => (
                <MeetingCard key={key} data={meeting} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
