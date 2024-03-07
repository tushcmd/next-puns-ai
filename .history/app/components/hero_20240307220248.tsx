'use client'

import { useState, FormEvent } from "react";
import Image from "next/image";
import Spinner from "./Spinner";




export default function Hero() {

    const [pun, setPun] = useState("");
    const [punLoading, setPunLoading] = useState(false);
    const [punLoadingError, setPunLoadingError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const prompt = formData.get("prompt")?.toString().trim();

        if (prompt) {
        try {
            setPun("");
            setPunLoadingError(false);
            setPunLoading(true);

            const response = await fetch("/api/cringe?prompt=" + encodeURIComponent(prompt));
            const body = await response.json();
            setPun(body.pun);
        } catch (error) {
            console.error(error);
            setPunLoadingError(true);
        } finally {
            setPunLoading(false);
        }
        }
    }



    return (
        <div className="flex flex-col relative justify-center items-center h-auto md:py-16 py-6 overflow-wrap">
            <p className="text-3xl font-bold pb-4 bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Pun AI</p>
            <p className="text-base font-bold">powered by GPT-3</p>
            <div className="text-base ">Enter a topic and the AI will generate a hilarious(prolly not so hilarious) <br /> pun to brighten up your day</div>
            <div className='mx-[2rem] relative w-full flex items-center'>
                <Image
                    src={'/public/assets/OIP-crackmeup.jpg'}
                    fill
                    alt='Crack me up'
                    priority
                    className='object-cover rounded-3xl'
                    quality={75}
                    sizes="100vw"
                />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-between mb-32 text-center'>
                <div className='mb-4'>
                    <label 
                        className="mb-4"
                    >
                        Enter random topic to get pun....
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="prompt-input" 
                        type="text" 
                        placeholder="e.g. money, code, fruits">
                    </input>
                </div>
                <button type='submit' className='mb-3 border static rounded-xl bg-gray-200 p-4 dark:bg-zinc-800/30' disabled={punLoading}>
                    Stupid pun
                </button>
            </form>

            {punLoading && <Spinner />}
            {punLoadingError && "Something went wrong. Please try again."}
            {pun && <h5>{pun}</h5>}
        </div>
    )
}