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
        <div>
            <p className="text-xl py-2 bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Pun AI</p>
            <p>powered by GPT-3</p>
            <div>Enter a topic and the AI will generate a hilarious(prolly not so hilarious) pun to brighten up your day</div>
            <div className='mx-[2rem] relative w-full aspect-video'>
                <Image
                    src='public\images\OIP-crackmeup.jpg'
                    fill
                    alt='Crack me up'
                    priority
                    className='object-cover rounded-3xl '
                />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-between mb-32 text-center'>
                <div className='mb-4'>
                    <label>Enter random topic to get pun....</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="prompt-input" 
                        type="text" 
                        placeholder="e.g. money, code, fruits">
                    </input>
                </div>
                <button type='submit' className='mb-3' disabled={punLoading}>
                    Stupid pun
                </button>
            </form>

            {punLoading && <Spinner animation='border' />}
            {punLoadingError && "Something went wrong. Please try again."}
            {pun && <h5>{pun}</h5>}
        </div>
    )
}