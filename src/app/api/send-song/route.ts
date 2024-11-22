import connectMongoDB from "@/lib/mongodb";
import Post from "@/models/PostModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const posts = await Post.find();
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  const { recipient, id_track, description } = await req.json();
  await connectMongoDB();
  await Post.create({ recipient, id_track, description });

  return NextResponse.json({ message: "success", status: 200 });
}
