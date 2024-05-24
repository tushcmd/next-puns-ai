// 
import { AI } from 'ai';
import { openai } from '@ai-sdk/openai';

export const ai = createAI({
  providers: [openai({ apiKey: process.env.OPENAI_API_KEY })],
});