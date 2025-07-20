import { NextApiRequest, NextApiResponse } from "next";


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body();
    console.log(body, "body parsed")
    return res.status(200).json({ message: "Success", data: body })
}

