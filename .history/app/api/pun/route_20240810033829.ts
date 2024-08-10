// app/api/pun/route.ts

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid or missing prompt' }, { status: 400 });
    }

    if (prompt.length > 100) {
      return NextResponse.json({ error: 'Prompt too long (max 100 characters)' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3.1-8b-instruct:free',
      messages: [
        { role: 'system', content: 'You are a clever pun generator. Create a witty pun based on the given topic.' },
        { role: 'user', content: `Topic: ${prompt}` }
      ],
      max_tokens: 100,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const pun = completion.choices[0].message.content?.trim() || 'Sorry, I couldn\'t generate a pun this time.';

    console.log('API response:', { pun });
    return NextResponse.json({ pun });

  } catch (error) {
    console.error('Error generating pun:', error);
    return NextResponse.json({ error: 'Failed to generate pun', details: error.message }, { status: 500 });
  }
}


// import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

// // Initialize the OpenAI client with custom base URL and API key
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// export async function POST(request: Request) {
//   try {
//     // Parse the request body
//     const body = await request.json();
//     const { prompt } = body;

//     // Validate the prompt
//     if (!prompt || typeof prompt !== 'string') {
//       return NextResponse.json({ error: 'Invalid or missing prompt' }, { status: 400 });
//     }

//     if (prompt.length > 100) {
//       return NextResponse.json({ error: 'Prompt too long (max 100 characters)' }, { status: 400 });
//     }

//     // Create a chat completion request
//     const completion = await openai.chat.completions.create({
//       model: 'meta-llama/llama-3.1-8b-instruct:free',
//       messages: [
//         { role: 'system', content: 'You are a clever pun generator. Create a witty pun based on the given topic.' },
//         { role: 'user', content: `Topic: ${prompt}` }
//       ],
//       max_tokens: 100,
//       temperature: 0.7,
//       presence_penalty: 0.1,
//       frequency_penalty: 0.1,
//     });

//     // Extract the generated pun
//     const pun = completion.choices[0].message.content?.trim() || 'Sorry, I couldn\'t generate a pun this time.';

//     // Log the response and return the pun
//     console.log('API response:', { pun });
//     return NextResponse.json({ pun });

//   } catch (error) {
//     console.error('Error generating pun:', error);
//     return NextResponse.json({ error: 'Failed to generate pun' }, { status: 500 });
//   }
// }

{/*
//import { NextResponse } from 'next/server';

import type { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export async function POST(
  req: NextRequest,
  res: NextResponse
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

  const pun = completion.choices[0].message.content;

  res.status(200).json({ pun });
}

*/}
