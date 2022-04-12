import { Header } from "../components";
import MeetingCard from "../components/Meeting-card";

export default function Meetings() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex jus">
        <MeetingCard />
      </div>
    </div>
  );
}
