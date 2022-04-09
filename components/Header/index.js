import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full border-b border-black/10 ">
            <div className="max-w-6xl mx-auto flex justify-between gap-8 px-8 sm:px-16 items-center h-16 text-md">
                <div>
                    MS CLUB
                </div>
                <div className="flex items-center gap-8">
                    <Link href="#" >
                        <a className="hover:text-purple-700 cursor-pointer transition-all duration-300">Admin Panel</a>
                    </Link>
                    <Link href="#" >
                        <a className="hover:text-purple-700 cursor-pointer transition-all duration-300">Login</a>
                    </Link>
                    <Link href="#" >
                        <a className="bg-purple-700 border border-purple-700 transition hover:text-purple-700 hover:bg-white rounded text-white py-1 px-3">Signup</a>
                    </Link>
                </div>
            </div>
        </div>
    )
};