import Image from "next/image";
export default function MeetingDeleted() {
  return (
    <div className="container relative inset-0 flex flex-wrap items-start w my-12 px-10">
      <div className="lg:w-1/4 w-full lg:pr-3 ">
        <div className="bg-gray-200 rounded-md">
          <div className="flex px-6">
            <div className="leading-relaxed pt-6 text-black flex">
              <h3 className="text-2xl  text-black mb-1 ">
                Weekly dev meeting [mandatory]
              </h3>
            </div>
          </div>
          <div className="leading-relaxed px-6 text-black opacity-60">
            <span className="text-xl">Tuesday, April 12</span>
            <br />
            <span className="text-xl">7:00pm - 8:00pm</span>
          </div>
          <div className="flex px-6 pt-2">
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-400  bg-white z-0 text-center flex p-1">
              A
            </div>
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-400  bg-white z-10 text-center flex p-1">
              A
            </div>
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-400  bg-white z-20 text-center flex p-1">
              A
            </div>
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-400  bg-white z-30 text-center flex p-1">
              A
            </div>
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2 border border-slate-400  bg-white z-40 text-center flex p-1">
              A
            </div>
            <div className="rounded-full w-8 h-8 justify-center items-center -ml-2  border border-slate-400 flex bg-white z-50 text-center p-1">
              +3
            </div>
          </div>
          <div className="content-center top-32 flex justify-center pt-4">
            <a
              href="#"
              className="text-white w-96 text-center font-bold px-4 py-3  rounded rounded-t-none bg-rose-500 hover:bg-rose-800 hover:text-white hover:border-rose-700 hover:border-1">
              Deleted
            </a>
            <div className="absolute z-10 top-5 left-80 pl-7 flex justify-end py-2 px-3 items-center">
              <Image
                src="/icons/close-icon.svg"
                width={25}
                height={25}
                alt="closing-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
