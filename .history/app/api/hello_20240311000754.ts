import type { NextResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function GET(
  res: NextResponse<ResponseData>
) {
  return res.status(200).json({ message: 'Hello from Next.js!' });
  
}