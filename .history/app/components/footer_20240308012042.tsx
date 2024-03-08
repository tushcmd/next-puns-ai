import Link from "next/link";


export default function Footer() {
    return (
        <div className="inline-flex p-6 max-w-3xl gap-3">
            <div>
                <a
                    href="https://github.com/#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    Github
                </a>
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