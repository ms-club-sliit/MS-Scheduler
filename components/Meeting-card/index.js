import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function MeetingCard(props) {
  const { data } = props;
  return (
    <div className="group bg-slate-100 flex flex-col justify-between rounded w-full relative">
      <div className="m-5 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold leading-[26px] text-black">
          {data.meetingName}
        </h3>
        <div className="text-black/60 flex flex-col">
          <span className="text-xl">
            {moment(data.startDateTime).format("MMM Do YY")}
          </span>
          <span className="text-xl">
            {moment(data.startDateTime).format("LT")} -{" "}
            {moment(data.endDateTime).format("LT")}
          </span>
        </div>
        <div className="flex">
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-200  bg-white text-center">
            A
          </div>
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-200  bg-white text-center">
            A
          </div>
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-200  bg-white text-center">
            A
          </div>
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-200  bg-white text-center">
            A
          </div>
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-200  bg-white text-center">
            A
          </div>
          <div className="rounded-full w-8 h-8 justify-center items-center -ml-2  border border-slate-200  bg-white text-center">
            +3
          </div>
        </div>
      </div>
      <Link href={data.sheduledLink}>
        <a className="text-white w-full block text-center font-bold py-3 rounded-b bg-rose-500 hover:bg-rose-600 transition">
          Join Now
        </a>
      </Link>
      <div className="group-hover:block hidden absolute z-10 right-4 top-4">
        <button>
          <Image
            src="/icons/close-icon.svg"
            width={25}
            height={25}
            alt="closing-icon"
          />
        </button>
      </div>
    </div>
  );
}
