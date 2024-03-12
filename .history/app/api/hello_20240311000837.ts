import type { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export default function GET(
  res: NextResponse
) {
  return res.status(200).json({ message: 'Hello from Next.js!' });
  
}