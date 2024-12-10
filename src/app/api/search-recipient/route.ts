import connectMongoDB from "@/lib/mongodb";
import Letter from "@/models/LetterModel";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const search = await req.nextUrl.searchParams.get("q");

    await connectMongoDB();

    const posts = await Letter.find({
      recipient: search,
    });

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
