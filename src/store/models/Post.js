class Post {
  constructor(payload) {
    this.id = String(payload.id);
    this.author = payload.autor;
    this.creationDate = payload.creationDate;
    this.title = payload.title || "Untitled";
    this.content = payload.content || "";
    this.categories = payload.categories || [];
    this.comments = payload.comments || [];
    this.rating = payload.rating || 0;
  }
}

export default Post;