import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed flex justify-center items-center w-full z-50 t-0 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit">
            <div className="container flex flex-row items-center md:max-w-5xl w-auto px-4 py-2 justify-between font-mono text-sm">
                <Link
                    className=""
                    href='/'
                >
                    Pun AI
                </Link>

                <Link
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://tushdev.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <p>@tush</p>
                </Link>
            </div>
        </header>


    );
}


{/*<header className = 'fixed flex justify-center items-center w-full z-50 t-0 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            <div className="flex items-start md:max-w-5xl py-3 w-auto md:px-5 px-5 justify-start font-mono text-sm">
                <Link href='/' className=''> Pun AI</Link>
            </div>
        </header> */}

{/*} <div className="flex flex-row z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <p className="fixed left-0 top-0 flex items-start border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Pun AI
            </p>
            <p>h2</p>
        </div> */}