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
        console.log("Form submitted"); // Debug log

        // Get the prompt value directly from the state
        const trimmedPrompt = prompt.trim();

        console.log("Prompt:", trimmedPrompt); // Debug log

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
            console.log("Prompt is empty"); // Debug log
        }
    }

    return (
        <div className="flex flex-col relative justify-center items-center h-screen md:py-10 py-6 overflow-wrap max-w-3xl px-5">
            <p className="text-3xl font-bold pb-4 bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Pun AI
            </p>
            <p className="text-base font-bold">powered by GPT-3</p>
            <div className="text-sm">
                Hey champ! Generate a random pun from a topic to brighten your day
            </div>
            <div className="mx-[2rem] relative w-full flex items-center aspect-[10/5]">
                {/* SVG code here */}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mb-8 text-center items-center">
                <div className="mb-4">
                    <label className="pb-8">Enter random topic to get pun....</label>
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
                    className="mb-3 border static rounded-xl bg-zinc-700 py-2 px-4 hover:bg-zinc-400 dark:bg-white"
                    disabled={punLoading}
                >
                    Stoopid pun
                </button>
            </form>

            {punLoading && <Spinner />}
            {punLoadingError && "Something went wrong. Please try again."}
            {pun && <p className='text-base p-2 text-white dark:text-black'>{pun}</p>}
        </div>
    );
}