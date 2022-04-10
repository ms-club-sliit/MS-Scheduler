import { Header } from "../components";

export default function create() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-fit px-8 flex flex-col mx-auto justify-center my-10 gap-10">
        <div>
          <h2 className="text-4xl font-medium text-center leading-tight">
            Schedule a Meeting
          </h2>
        </div>
        <div className="flex flex-col w-full max-w-sm ">
          <form className="">
            <div className="gap-9">
              <label htmlFor="meetingName" className="mx-1">
                Meeting name
              </label>
              <input
                type="text"
                name="meetingName"
                id="meetingName"
                placeholder="Meeting Name"
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="startDateTime" className="mx-1">
                Starting Time
              </label>
              <input
                type="date"
                name="startDateTime"
                id="startDateTime"
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="endDateTime" className="mx-1">
                End Time
              </label>
              <input
                type="date"
                name="endDateTime"
                id="endDateTime"
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-4"></input>

              <label htmlFor="emailList" className="mx-1">
                Add Patricipents{" "}
              </label>
              <input
                type="email"
                name="emailList"
                id="emailList"
                placeholder="Add members"
                className=" w-full  border outline-none focus:border-black border-gray-200 rounded p-3 mb-6"></input>

              <button className="w-fit border text-xs bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3 mb-6 ">
                Add member
              </button>

              <button className="w-full border text-lg bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
