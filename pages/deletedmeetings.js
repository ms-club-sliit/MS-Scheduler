import { Header } from "../components";
import MeetingDeleted from "../components/Meeting-Deleted";

export default function MeetingsDeleted() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex mt-6 ml-10">
          <div className="px-2 py-1 bg-gray-200 rounded-md mr-3 text-gray-600">
            COMING UP
          </div>
          <div className="px-2 py-1 bg-gray-200 rounded-md mr-3 text-gray-600">
            WRAPPED
          </div>
          <div className="px-2 py-1 bg-purple-700 rounded-md mr-3 text-white">
            DELETED
          </div>
        </div>
        <div className="flex">
          <MeetingDeleted />
        </div>
      </div>
    </>
  );
}
