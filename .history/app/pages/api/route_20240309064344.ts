import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 

export async function GET() {
  return NextResponse.json({
    name: 'tush'
  });
}



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


