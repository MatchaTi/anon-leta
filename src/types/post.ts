export default interface Post {
  posts: Array<{
    _id: string;
    recipient: string;
    id_track: string;
    description: string;
  }>;
}
