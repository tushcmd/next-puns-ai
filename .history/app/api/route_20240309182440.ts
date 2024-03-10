// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a pun based on the following topic.\n
    Topic: ${prompt}\n
    Stoopid pun:`,
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote });
}




//import { NextResponse } from 'next/server'
//export async function GET() {
//  return NextResponse.json({
//    name: 'tush'
//  });
//}



//type ResponseData = {
//  message: string
//}
// 
//export default function handler(
//  req: NextApiRequest,
//  res: NextApiResponse<ResponseData>
//) {
//  res.status(200).json({ message: 'Hello from Next.js!' })
//}


