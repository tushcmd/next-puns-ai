//import { NextResponse } from 'next/server';

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt missing' });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: 'Prompt too long' });
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "system", content:  `Create a pun based on the following topic.\n 
    Topic: ${prompt}\n ` }],
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  console.log(completion.choices[0].message.content);

  const pun = completion.choices[0];

  res.status(200).json({ pun });
}






//export async function GET() {
//  return NextResponse.json({
//    message: 'Hello from Next.js!',
//  });
//}
