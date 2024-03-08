import Link from "next/link";


export default function Footer() {
    return (
        <div className="inline-flex p-6 max-w-3xl gap-3 items-center text-center">
            <div>
                <Link
                    href="https://github.com/#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </Link>
            </div>
            <Link
                className="pointer-events-none flex place-items-center gap-2 px-8 lg:pointer-events-auto lg:p-0"
                href="https://tushdev.co/"
                target="_blank"
                rel="noopener noreferrer"
            >
                By{" "}
                <p>@tush</p>
            </Link>

        </div>
    )
}