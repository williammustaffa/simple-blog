export default function buildPostUrl(post) {
  if (!post.id) return null;

  return `/post/${post.id}/${post.title}`
    .replace(/\s/gi, "-")
    .toLocaleLowerCase();
}