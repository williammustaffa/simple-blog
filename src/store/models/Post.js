class Post {
  constructor(payload) {
    this.id = payload.id || payload.id;
    this.author = payload.autor;
    this.title = payload.title || "Untitled";
    this.content = payload.content || "";
    this.categories = payload.categories || [];
    this.comments = payload.comments || [];
    this.rating = payload.rating || 0;
  }
}

export default Post;