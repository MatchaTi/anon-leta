import { ILetter } from "@/types/letter";
import axios from "axios";
import getSpotifyAccessToken from "./spotify";

export async function getTrackDetails(trackId: string, token: string) {
  const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return {
    name: response.data.name,
    artist: response.data.artists[0].name,
    image: response.data.album.images[2]?.url,
  }
}

export async function getAllLetters(data: ILetter[]) {
  const accessToken = await getSpotifyAccessToken();

  const letters = await Promise.all(
    data.map(async (letter) => {
      const trackDetails = await getTrackDetails(letter.id_track, accessToken);

      return {
        ...letter,
        song: trackDetails,
      };
    })
  );

  return letters;
}
