import connectMongoDB from "@/lib/mongodb";
import Letters from "@/models/LetterModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const letters = await Letters.find();
  return NextResponse.json({ letters });
}

export async function POST(req: Request) {
  const { recipient, id_track, description } = await req.json();
  const createdAt = new Date();
  await connectMongoDB();
  await Letters.create({ recipient, id_track, description, createdAt });

  return NextResponse.json({ message: "success", status: 200 });
}
