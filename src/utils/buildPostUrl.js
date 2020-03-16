export default function buildPostUrl(post) {
  if (!post.id) return null;

  const postId = post.id;
  const postTitle = post.title
    .replace(/[^\w\d\s]/g, "")
    .replace(/\s/gi, "-")
    .toLocaleLowerCase();;

  return `/post/${postId}/${postTitle}`;
}