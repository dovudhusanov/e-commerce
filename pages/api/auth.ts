// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    // @ts-ignore
    "_id": "631826516cc9e3d35efee79e",
    "name": "apezon",
    "email": "dovudkhonhusanov5007@gmail.com",
    "createdAt": "2022-09-07T05:03:40.231Z",
    "updatedAt": "2022-10-13T11:21:47.722Z",
    "__v": 0,
    "token": "Dhuw@QhhAd28hqRdH8dhT28dWdah8hd72qh7h7ahiFqywghda7g2dq62gaV7gsdJyaFg6gyagwRydgauGygd6qGasbd7272t"
  })
}
