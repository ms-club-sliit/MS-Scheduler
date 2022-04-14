import { Header } from "../components";
import MeetingCard from "../components/Meeting-card";

export default function Meetings() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex mt-6 ml-10">
          <div className="px-2 py-1 bg-purple-700 rounded-md mr-3 text-white">
            COMING UP
          </div>
          <div className="px-2 py-1 bg-gray-200 rounded-md mr-3 text-gray-600">
            WRAPPED
          </div>
          <div className="px-2 py-1 bg-gray-200 rounded-md mr-3 text-gray-600">
            DELETED
          </div>
        </div>
        <div className="flex">
          <MeetingCard />
        </div>
      </div>
    </>
  );
}
