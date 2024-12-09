import connectMongoDB from "@/lib/mongodb";
import Letters from "@/models/LetterModel";
import { NextResponse } from "next/server";

// export const maxDuration = 60;

export async function GET() {
  try {
    await connectMongoDB();
    const letters = await Letters.find().sort({ createdAt: -1 });
    return NextResponse.json({ letters });
  } catch (error) {
    console.log("error cuyyy", error);
    return NextResponse.json({ message: "error parah cuyyy", error });
  }
}

export async function POST(req: Request) {
  const { recipient, id_track, description } = await req.json();
  const createdAt = new Date();
  await connectMongoDB();
  await Letters.create({ recipient, id_track, description, createdAt });

  return NextResponse.json({ message: "success", status: 200 });
}
