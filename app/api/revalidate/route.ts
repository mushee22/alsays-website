import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        revalidateTag(body.model)
        return Response.json({ message: "Success", data: JSON.stringify(body), model: body.model }, { status: 200 })
    } catch (error) {
        return Response.json({ message: "Failed", error: JSON.stringify(error) }, { status: 500 })
    }
}

