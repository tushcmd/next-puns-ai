import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";

export default function Header() {
    return (
        <header className="fixed flex justify-center items-center w-full t-0 md:pb-4 md:pt-4 backdrop-blur-2xl">
            <div className="flex flex-row items-center w-full p-6 md:max-w-5xl justify-between font-mono text-sm">
                <Link
                    className="px-2 md:px-8"
                    href='/'
                >
                    Pun AI
                </Link>

                <div className="px-2 md:px-8">
                    <ThemeSwitchButton />
                </div>
            </div>
        </header>
    );
}