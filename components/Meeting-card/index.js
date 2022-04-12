export default function MeetingCard(props) {
  const { data } = props;
  return (
    <div className="container mx-auto flex flex-wrap items-start my-16 px-10">
      <div className="lg:w-1/4 w-full lg:pr-3">
        <div className="bg-purple-600 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white mb-2">meeting title</h3>
          <div className="leading-relaxed text-white text-justify">
            meeting description
          </div>
          <div className="leading-relaxed text-center text-black">
            <span className="font-bold text-base">Meeting Date: 21.21.21</span>
            <br />
            <span className="font-bold text-base">Meeting Time: 21:21 PM</span>
          </div>
          <div className="content-center flex justify-center pt-4">
            <a
              href="#"
              className="text-blue-600 font-bold px-4 py-3 bg-gray-400 rounded hover:bg-gray-500 hover:text-white">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
