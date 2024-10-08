'use client'

import { useState, FormEvent } from "react";
import Spinner from "./Spinner";

export default function Hero() {
    const [prompt, setPrompt] = useState("");
    const [pun, setPun] = useState("");
    const [punLoading, setPunLoading] = useState(false);
    const [punLoadingError, setPunLoadingError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form submitted");

        const trimmedPrompt = prompt.trim();
        console.log("Prompt:", trimmedPrompt);

        if (trimmedPrompt) {
            try {
                setPun("");
                setPunLoadingError(false);
                setPunLoading(true);

                console.log('Sending request to API');
                const response = await fetch("/api/pun", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt: trimmedPrompt }),
                });

                console.log('Received response from API');
                const data = await response.json();

                if (response.ok) {
                    console.log('Pun received:', data.pun);
                    setPun(data.pun);
                } else {
                    console.error('API error:', data);
                    setPunLoadingError(true);
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setPunLoadingError(true);
            } finally {
                setPunLoading(false);
            }
        } else {
            console.log("Prompt is empty");
        }
    }

    return (
        <div className="flex flex-col relative justify-center items-center h-screen md:py-6 py-4 overflow-wrap max-w-3xl px-5">
            <p className="text-3xl font-bold pb-4 bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Pun AI
            </p>
            <p className="text-base font-bold">powered by GPT-3</p>
            <div className="text-sm mb-4">
                Hey champ! Generate a random pun from a topic to brighten your day
            </div>
            <div className="mx-[2rem] relative w-full flex items-center justify-center aspect-[10/5] min-h-[200px] border rounded-lg p-4 mb-4">
                {punLoading ? (
                    <Spinner />
                ) : punLoadingError ? (
                    <p className="text-red-500">Something went wrong. Please try again.</p>
                ) : pun ? (
                    <p className="text-lg text-center">{pun}</p>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="#34b29b"
                        viewBox="0 0 256 256"
                    >
                        <path d="M216,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.17,12.17,0,0,0,40,236a11.89,11.89,0,0,0,7.69-2.83l.06-.06,32.14-28.17A4,4,0,0,1,82.5,204H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52Zm4,140a4,4,0,0,1-4,4H82.5a12.1,12.1,0,0,0-7.79,2.87l-32.16,28.2A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-56-80a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,112Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,144Z"></path>
                    </svg>
                )}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mb-8 text-center items-center w-full">
                <div className="mb-4 w-full">
                    <label className="pb-2 block">Enter random topic to get pun....</label>
                    <input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-5 bg-white text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="prompt-input"
                        type="text"
                        placeholder="e.g. money, code, fruits"
                    />
                </div>
                <button
                    name='submit'
                    type="submit"
                    className="mb-3 border static rounded-xl bg-zinc-700 py-2 px-4 hover:bg-zinc-400 dark:bg-white text-white dark:text-black"
                    disabled={punLoading}
                >
                    Generate Pun
                </button>
            </form>
        </div>
    );
}


// 'use client'

// import { useState, FormEvent } from "react";
// import Spinner from "./Spinner";

// export default function Hero() {
//     const [prompt, setPrompt] = useState("");
//     const [pun, setPun] = useState("");
//     const [punLoading, setPunLoading] = useState(false);
//     const [punLoadingError, setPunLoadingError] = useState(false);

//     async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         console.log("Form submitted"); // Debug log

//         // Get the prompt value directly from the state
//         const trimmedPrompt = prompt.trim();

//         console.log("Prompt:", trimmedPrompt); // Debug log

//         if (trimmedPrompt) {
//             try {
//                 setPun("");
//                 setPunLoadingError(false);
//                 setPunLoading(true);

//                 console.log('Sending request to API');
//                 const response = await fetch("/api/pun", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ prompt: trimmedPrompt }),
//                 });

//                 console.log('Received response from API');
//                 const data = await response.json();

//                 if (response.ok) {
//                     console.log('Pun received:', data.pun);
//                     setPun(data.pun);
//                 } else {
//                     console.error('API error:', data);
//                     setPunLoadingError(true);
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//                 setPunLoadingError(true);
//             } finally {
//                 setPunLoading(false);
//             }
//         } else {
//             console.log("Prompt is empty"); // Debug log
//         }
//     }

//     return (
//         <div className="flex flex-col relative justify-center items-center h-screen md:py-10 py-6 overflow-wrap max-w-3xl px-5">
//             <p className="text-3xl font-bold pb-4 bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
//                 Pun AI
//             </p>
//             <p className="text-base font-bold">powered by GPT-3</p>
//             <div className="text-sm">
//                 Hey champ! Generate a random pun from a topic to brighten your day
//             </div>
//             <div className="mx-[2rem] relative w-full flex items-center aspect-[10/5]">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="80"
//                     height="80"
//                     fill="#34b29b"
//                     viewBox="0 0 256 256"
//                 >
//                     <path d="M216,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.17,12.17,0,0,0,40,236a11.89,11.89,0,0,0,7.69-2.83l.06-.06,32.14-28.17A4,4,0,0,1,82.5,204H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52Zm4,140a4,4,0,0,1-4,4H82.5a12.1,12.1,0,0,0-7.79,2.87l-32.16,28.2A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-56-80a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,112Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,144Z"></path>
//                 </svg>
//             </div>
//             <form onSubmit={handleSubmit} className="flex flex-col mb-8 text-center items-center">
//                 <div className="mb-4">
//                     <label className="pb-8">Enter random topic to get pun....</label>
//                     <input
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         className="shadow appearance-none border rounded w-full py-2 px-5 bg-white text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
//                         id="prompt-input"
//                         type="text"
//                         placeholder="e.g. money, code, fruits"
//                     />
//                 </div>
//                 <button
//                     name='submit'
//                     type="submit"
//                     className="mb-3 border static rounded-xl bg-zinc-700 py-2 px-4 hover:bg-zinc-400 dark:bg-white"
//                     disabled={punLoading}
//                 >
//                     Stoopid pun
//                 </button>
//             </form>

//             {punLoading && <Spinner />}
//             {punLoadingError && "Something went wrong. Please try again."}
//             {pun && <p className='text-base p-2 text-white dark:text-black'>{pun}</p>}
//         </div>
//     );
// }

