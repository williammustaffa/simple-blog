import Author from "./Author";

class Post {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.author = payload.autor || new Author();
    this.creationDate = payload.creationDate || "";
    this.title = payload.title|| "";
    this.content = payload.content || "";
    this.categories = payload.categories || [];
    this.comments = payload.comments || [];
    this.ratings = payload.ratings || [];
  }
}

export default Post;