import { Header } from "../components";

export default function Login() {

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="max-w-6xl px-8 my-10 sm:px-16 mx-auto flex flex-col flex-grow justify-center gap-12 items-center">
                <div>
                    <h2 className="text-4xl leading-tight font-medium text-center">
                        Log in to<br />Meeting Scheduler
                    </h2>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-sm">
                    <input type="email" className="w-full border outline-none focus:border-black border-gray-200 rounded p-3" placeholder="Email" />
                    <input type="password" className="w-full border outline-none focus:border-black border-gray-200 rounded p-3" placeholder="Password" />
                    <button className="w-full border text-lg bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
};