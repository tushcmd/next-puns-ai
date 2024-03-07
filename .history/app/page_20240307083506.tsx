import Image from "next/image";
import { FormEvent } from "react";



export default function Home() {
 {/* async function handleSubmit(e: FormEvent:<HTMLFormElement>) {
    return ;
  }    */}


  return (
    //Main Section
    <main className="flex min-h-screen flex-col items-center justify-between pt-6 px-24">

      {/*Nav*/}

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Pun AI
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/*<div>
            Dak
  </div>*/}
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://tushdev.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <p>@tush</p>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="p-4 lg:pb-8 text-xl">
          Generate a random pun from a topic to brighten your day <br /> with Pun AI
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="156"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9"
          />
        </svg>
      </div>

      <form className="flex flex-col justify-between mb-32 text-center lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className='w-full mb-4'>
          <label className="block items-center justify-center mb-4" htmlFor="prompt-input">
            Enter random topic to get pun...
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="prompt-input" 
            type="text" 
            placeholder="e.g. money, code, fruits">
          </input>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Pun
        </button>
      </form>
    </main>
  );
}
