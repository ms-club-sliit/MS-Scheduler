import { Header } from "../components";
import MeetingCard from "../components/Meeting-card";

export default function Meetings() {
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
          <div className="max-w-6xl mx-auto px-8 sm:px-16">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
              <MeetingCard />
              <MeetingCard />
              <MeetingCard />
              <MeetingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
