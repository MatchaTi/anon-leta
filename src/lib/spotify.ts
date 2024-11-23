import axios from "axios";

export default async function getSpotifyAccessToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  try {
    const response = await axios.post(tokenUrl,
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
}
