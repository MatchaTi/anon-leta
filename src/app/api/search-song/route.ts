import getSpotifyAccessToken from "@/lib/spotify";
import axios from "axios";

export async function GET(req: any) {
  const search = await req.nextUrl.searchParams.get("search");

  const accessToken = await getSpotifyAccessToken();

  const response = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return new Response(JSON.stringify(response.data.tracks.items));
}
